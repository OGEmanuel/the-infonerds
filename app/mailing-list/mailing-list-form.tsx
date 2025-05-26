'use client';

import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormField } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import useThemeStore from '@/store/theme-control';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please provide a valid email',
    })
    .email(),
});

export function MailingListForm({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { theme } = useThemeStore();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { email: string }) => {
      return await axios.post('/api/subscribe', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      form.reset();
      setOpen(false);
      toast({
        title: 'Success!',
        description: 'Thank you for your submission!',
      });
    },
    onError: error => {
      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={`w-[80%] rounded-md sm:max-w-[425px] ${theme === 'dark' ? 'bg-[#1e1e1e]/50 backdrop-blur-xl' : 'bg-white'}`}
      >
        <DialogHeader>
          <DialogTitle
            className={theme === 'dark' ? 'text-white' : 'text-black'}
          >
            Join Our Mailing List
          </DialogTitle>
          <DialogDescription
            className={theme === 'dark' ? 'text-white' : 'text-black'}
          >
            Be the first to know about special offers and more!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <TextInput
                  placeholder="Enter email"
                  label={'Email address'}
                  fieldState={fieldState}
                  field={field}
                />
              )}
            />
            {/* <Button
              type="submit"
              className={`rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
            >
              Subscribe
            </Button> */}
            <Button
              type={'submit'}
              disabled={isPending}
              className={`grid-stack grid w-max gap-0 overflow-hidden rounded-xl p-4 font-medium max-sm:w-full ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
            >
              <span
                className={cn(
                  'grid-area-stack visible translate-y-0 transition-all',
                  isPending && 'invisible -translate-y-[200px]',
                )}
              >
                Subscribe
              </span>
              <span
                className={cn(
                  `grid-area-stack invisible flex w-full translate-y-[200px] justify-center transition-all`,
                  isPending && 'visible translate-y-0',
                )}
              >
                <Loader2 aria-label="Loading" className="animate-spin" />
              </span>
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default MailingListForm;

export const MobileMailingListForm = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme } = useThemeStore();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { email: string }) => {
      return await axios.post('/api/subscribe', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      form.reset();
      props.setOpen(false);
      toast({
        title: 'Success!',
        description: 'Thank you for your submission!',
      });
    },
    onError: error => {
      toast({
        title: 'Error!',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data);
  }

  return (
    <Card
      className={cn(
        `fixed bottom-0 w-full transition-all sm:hidden ${theme === 'dark' ? 'bg-[#1e1e1e]/50 backdrop-blur-xl' : 'bg-white'}`,
        props.open
          ? 'z-[9999] translate-y-0 opacity-100'
          : '-z-[9999] translate-y-full opacity-0',
      )}
    >
      <CardHeader>
        <CardTitle className={theme === 'dark' ? 'text-white' : 'text-black'}>
          Join Our Mailing List
        </CardTitle>
        <CardDescription
          className={theme === 'dark' ? 'text-white' : 'text-black'}
        >
          Be the first to know about special offers and more!
        </CardDescription>
      </CardHeader>
      <button
        onClick={() => props.setOpen(!open)}
        className="absolute right-4 top-4"
      >
        <X
          className={`h-4 w-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}
        />
        <span className="sr-only">Close</span>
      </button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 p-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                placeholder="Enter email"
                label={'Email address'}
                fieldState={fieldState}
                field={field}
              />
            )}
          />
          <Button
            type={'submit'}
            disabled={isPending}
            className={`grid-stack grid w-max gap-0 overflow-hidden rounded-xl p-4 font-medium max-sm:w-full ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
          >
            <span
              className={cn(
                'grid-area-stack visible translate-y-0 transition-all',
                isPending && 'invisible -translate-y-[200px]',
              )}
            >
              Subscribe
            </span>
            <span
              className={cn(
                `grid-area-stack invisible flex w-full translate-y-[200px] justify-center transition-all`,
                isPending && 'visible translate-y-0',
              )}
            >
              <Loader2 aria-label="Loading" className="animate-spin" />
            </span>
          </Button>
        </form>
      </Form>
    </Card>
  );
};
