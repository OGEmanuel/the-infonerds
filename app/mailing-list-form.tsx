'use client';

import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormField } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import useThemeStore from '@/store/theme-control';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z.string().min(2, { message: 'Enter a valid email address.' }).trim(),
});

export function MailingListForm() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className={`max-w-80 rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
        >
          Join Our Mailing List
          <Mail className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`w-[80%] rounded-md sm:max-w-[425px] ${theme === 'dark' ? 'bg-[#1e1e1e]/50' : 'bg-white'}`}
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
