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
import { X } from 'lucide-react';
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
            <Button
              type="submit"
              className={`rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
            >
              Subscribe
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card
      className={cn(
        `fixed bottom-0 z-[9999] w-full sm:hidden ${theme === 'dark' ? 'bg-[#1e1e1e]/50 backdrop-blur-xl' : 'bg-white'}`,
        props.open ? 'block' : 'hidden',
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
            type="submit"
            className={`rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </Card>
  );
};
