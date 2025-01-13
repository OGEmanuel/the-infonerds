'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import TextInput from '@/components/TextInput';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Textarea } from '@/components/ui/textarea';
import { ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useThemeStore from '@/store/theme-control';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const items = [
  {
    id: 'wedding',
    label: 'Wedding',
  },
  {
    id: 'pre-wedding',
    label: 'Pre-wedding',
  },
  {
    id: 'portrait session',
    label: 'Portrait session',
  },
  {
    id: 'events',
    label: 'Events',
  },
  {
    id: 'co-operate',
    label: 'Corporate',
  },
  {
    id: 'commercial',
    label: 'Commercial',
  },
  {
    id: 'others',
    label: 'Others:',
  },
] as const;

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  smHandle: z.string().optional(),
  date: z.date({
    required_error: 'A date is required.',
  }),
  dob: z.date().optional(),
  location: z.string().min(2, {
    message: 'Enter a valid location.',
  }),
  events: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.',
  }),
  email: z.string().min(2, { message: 'Enter a valid email address.' }).trim(),
  message: z
    .string()
    .min(25, { message: 'Message should be at least 25 characters long' })
    .trim(),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

export function ContactForm() {
  const { theme } = useThemeStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      smHandle: '',
      date: new Date(),
      location: '',
      events: [],
      email: '',
      message: '',
      terms: false,
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
    <ToastProvider>
      <Toaster />
      <section id="contact-form" className="max-w-[50rem]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[3.5rem]"
          >
            <FormDescription
              className={`text-4xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Be one of our happy{' '}
              <span
                className={`bg-clip-text font-InriaFont font-bold italic ${theme === 'light' ? 'text-black' : 'text-[#e0f2fe]'}`}
              >
                people
              </span>{' '}
              <span
                className={`mt-4 block text-base font-normal ${theme === 'light' ? 'text-[#374151]' : 'text-[#6B7280]'}`}
              >
                Don&apos;t want to fill the form? you can send us a message{' '}
                <Link
                  href="mailto:contact@nerdnotnoob.com"
                  className={`font-medium hover:underline ${theme === 'light' ? 'text-[#0369a1]' : 'text-[#2563EB]'}`}
                >
                  contact@nerdnotnoob.com
                </Link>
              </span>
            </FormDescription>
            <div className="space-y-12">
              <div className="grid-cols-2 gap-x-4 gap-y-12 md:grid">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <TextInput
                      placeholder="Enter your name"
                      label={'Name'}
                      fieldState={fieldState}
                      field={field}
                    />
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="smHandle"
                  render={({ field, fieldState }) => (
                    <TextInput
                      placeholder="Enter your ig handle"
                      label={'Instagram handle'}
                      fieldState={fieldState}
                      field={field}
                    />
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="events"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel
                        className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
                      >
                        Event type
                      </FormLabel>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map(item => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="events"
                          render={({ field }) => {
                            return (
                              <FormItem key={item.id}>
                                <FormControl>
                                  <Checkbox
                                    className="hidden"
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={checked => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              value => value !== item.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel
                                  className={`block cursor-pointer rounded-[2rem] border p-4 font-medium ${field.value.includes(item.id) ? `border-transparent ${theme === 'light' ? 'bg-[#1D4ED8] text-black' : 'bg-[#2563EB] text-white'}` : `${theme === 'light' ? 'border-[#6B7280] text-[#6B7280]' : 'border-[#E5E7EB] text-[#9CA3AF]'}`}`}
                                >
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid-cols-2 items-end gap-x-4 gap-y-12 md:grid">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-3">
                      <FormLabel
                        className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
                      >
                        Event date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                `w-full rounded-2xl border-none ${theme === 'light' ? 'bg-[#f9f9f9] text-black' : 'bg-[#1e1e1e] text-[#f8f8f8]'}  p-4 text-left font-medium`,
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span
                                  className={`font-medium ${theme === 'light' ? 'text-black' : 'text-[#9CA3AF]'}`}
                                >
                                  Pick a date
                                </span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={date => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field, fieldState }) => (
                    <TextInput
                      placeholder="Where's the place"
                      label={'Shoot location'}
                      fieldState={fieldState}
                      field={field}
                    />
                  )}
                />
              </div>
              <MonthDayPicker name="dob" label="Birthday" />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    >
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about what you want.."
                        className={`resize-none rounded-2xl border-none ${theme === 'light' ? 'bg-[#f9f9f9] text-black placeholder:text-[#6B7280]' : 'bg-[#1e1e1e] text-white placeholder:text-[#9CA3AF]'} p-4`}
                        rows={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={`${theme === 'dark' && 'bg-white'}`}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel
                        className={`${theme === 'dark' && 'text-white'}`}
                      >
                        Accept terms and conditions
                      </FormLabel>
                      <FormDescription>
                        You agree to our <TermsAndConditions /> and Privacy
                        Policy.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.watch('terms') !== true}
                className={`rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
              >
                Send message
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </ToastProvider>
  );
}

interface MonthDayPickerProps {
  name: string;
  label: string;
}

export function MonthDayPicker({ name, label }: MonthDayPickerProps) {
  const form = useFormContext();
  const { theme } = useThemeStore();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <FormItem>
      <FormLabel
        className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        {label}
      </FormLabel>
      <div className="flex space-x-2">
        <FormField
          control={form.control}
          name={`${name}.month`}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger
                  className={`rounded-2xl border-none px-4 py-6 text-white ${theme === 'light' ? 'bg-[#f9f9f9] text-black placeholder:text-[#6B7280]' : 'bg-[#1e1e1e] text-white placeholder:text-[#9CA3AF]'}`}
                >
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={month} value={(index + 1).toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          control={form.control}
          name={`${name}.day`}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger
                  className={`rounded-2xl border-none px-4 py-6 text-white ${theme === 'light' ? 'bg-[#f9f9f9] text-black placeholder:text-[#6B7280]' : 'bg-[#1e1e1e] text-white placeholder:text-[#9CA3AF]'}`}
                >
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {days.map(day => (
                  <SelectItem key={day} value={day.toString()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <FormMessage />
    </FormItem>
  );
}

const TermsAndConditions = () => {
  const { theme } = useThemeStore();

  return (
    <Dialog>
      <DialogTrigger>
        <span className="text-[#0369a1] hover:underline">Terms of Service</span>
      </DialogTrigger>
      <DialogContent
        className={`max-h-[40rem] max-w-[85%] overflow-auto rounded-md sm:max-w-[750px] 2xl:max-h-[50rem] ${theme === 'dark' && 'bg-black text-white'}`}
      >
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read these terms and conditions carefully before contacting
            us.
          </DialogDescription>
        </DialogHeader>
        <ol className="flex list-inside list-decimal flex-col gap-6">
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Introduction
            <p className="text-base font-normal">
              These Terms of Service (&quot;Terms&quot;) govern your use of our
              videography and photography services, operated by &quot;Nerd Not
              Noob&quot; of &quot;The Info Nerds&quot; (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;). By hiring us or using our
              website, you agree to these Terms.
            </p>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Scope of Services
            <div className="text-base font-normal">
              <p>
                We offer professional videography and photography services,
                including but not limited to:
              </p>
              <ul className="list-inside list-disc pl-5 text-base font-normal">
                <li>
                  Event coverage (e.g., weddings, corporate events, concerts
                  etc).
                </li>
                <li>TV commercials and brand advertisements.</li>
                <li>Documentaries.</li>
                <li>Music videos.</li>
                <li>Other creative projects.</li>
              </ul>
            </div>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Bookings and Payments
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li>
                <span className="font-semibold">Deposit:</span> A non-refundable
                deposit, as agreed upon during the booking process, is required
                to secure your booking.
              </li>
              <li>
                <span className="font-semibold">Final Payment:</span> The
                remaining balance must be paid before or on the agreed project
                delivery date.
              </li>
              <li>
                <span className="font-semibold">Late Payments:</span> A specific
                fee or percentage may apply for late payments.
              </li>
              <li>
                <span className="font-semibold">Cancellation:</span>{' '}
                Cancellations must be made in writing. Refunds for cancellations
                will be subject to the terms stated in our Cancellation Policy.
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Cancellation and Rescheduling Policy
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li className="font-semibold">
                Cancellation:
                <ul className="list-inside list-disc pl-5 font-normal">
                  <li>
                    Cancellations made less than two weeks before the shoot date
                    may result in forfeiture of some percentage or all deposit.
                  </li>
                </ul>
              </li>
              <li className="font-semibold">
                Rescheduling:
                <ul className="list-inside list-disc pl-5 font-normal">
                  <li>
                    Rescheduling is subject to availability and must be
                    requested at least three weeks in advance. A rescheduling
                    fee may apply.
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Copyright and Usage Rights
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li>
                <span className="font-semibold">Ownership:</span> We retain the
                copyright to all images and videos created unless otherwise
                agreed in writing.
              </li>
              <li>
                <span className="font-semibold">Client Use:</span> You are
                granted a limited, non-exclusive license to use the final
                deliverables for personal or commercial purposes, as specified
                in your project agreement.
              </li>
              <li>
                <span className="font-semibold">Portfolio Use:</span> We reserve
                the right to use any non-confidential content for promotional
                purposes, including portfolio display, social media, and website
                use, unless otherwise agreed upon in writing.
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Client Responsibilities
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li>Provide accurate details about the event or project.</li>
              <li>
                Ensure that we have access to the venue, equipment setup areas,
                and relevant contacts.
              </li>
              <li>
                Obtain necessary permissions for photography or videography at
                specific venues or locations.
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Deliverables
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li>
                <span className="font-semibold">Format:</span> Final products
                will be delivered in agreed formats (e.g., USB, online link,
                physical prints).
              </li>
              <li>
                <span className="font-semibold">Timeline:</span> Delivery
                timelines will be outlined in the project agreement. Delays
                caused by unforeseen circumstances will be communicated
                promptly.
              </li>
              <li>
                <span className="font-semibold">Revisions:</span> Two revisions
                is included in your package. Additional revisions may incur
                extra fees.
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Liability
            <ol className="list-inside list-decimal pl-5 text-base font-normal">
              <li>
                We are not liable for issues beyond our control, including but
                not limited to:
                <ul className="list-inside list-disc pl-5">
                  <li>Equipment failure.</li>
                  <li>Venue restrictions.</li>
                  <li>Acts of nature.</li>
                </ul>
              </li>
              <li>
                Our liability for any claims is limited to the amount paid for
                the specific project.
              </li>
            </ol>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Confidentiality
            <div className="text-base font-normal">
              <span>
                We respect your privacy and will not share confidential details
                of your event or project without your consent, except as
                required for portfolio purposes (see Section 5).
              </span>
            </div>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Force Majeure
            <div className="text-base font-normal">
              <span>
                We are not responsible for delays or cancellations due to
                unforeseen events, including natural disasters, illness, or
                government restrictions
              </span>
            </div>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Dispute Resolution
            <div className="text-base font-normal">
              <span>
                Any disputes will be resolved amicably. If unresolved, disputes
                may be submitted to arbitration or court proceedings under the
                jurisdiction of Nigeria.
              </span>
            </div>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Changes to Terms
            <div className="text-base font-normal">
              <span>
                We reserve the right to update these Terms at any time. Changes
                will be communicated on our website or via email.
              </span>
            </div>
          </li>
          <li className="border-b border-black pb-5 text-lg font-semibold">
            Contact Information
            <div className="text-base font-normal">
              <span>
                For questions or concerns about these Terms, contact us at:
              </span>
              <ul className="list-inside list-disc pl-5">
                <li>
                  Email:{' '}
                  <Link
                    href="mailto:contact@nerdnotnoob.com"
                    className="text-[#0369a1] hover:underline"
                  >
                    contact@nerdnotnoob.com
                  </Link>
                </li>
                <li>Phone: +2348067936240</li>
              </ul>
            </div>
          </li>
        </ol>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="px-8 py-4">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
