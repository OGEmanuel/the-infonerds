"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import TextInput from "@/components/TextInput";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const items = [
  {
    id: "wedding",
    label: "Wedding",
  },
  {
    id: "pre-wedding",
    label: "Pre-wedding",
  },
  {
    id: "portrait session",
    label: "Portrait session",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "co-operate",
    label: "Co-operate",
  },
  {
    id: "commercial",
    label: "Commercial",
  },
  {
    id: "others",
    label: "Others:",
  },
] as const;

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  smHandle: z.string().min(2, {
    message: "Handle must be at least 2 characters.",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  events: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  email: z.string().min(2, { message: "Invalid value in field" }).trim(),
  message: z
    .string()
    .min(25, { message: "Message should be at least 25 characters long" })
    .trim(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      smHandle: "",
      date: new Date(),
      location: "",
      events: [],
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
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
            <FormDescription className="text-4xl font-semibold text-[#1F2937]">
              Be one of our happy{" "}
              <span className="bg-red-gradient bg-clip-text font-InriaFont font-bold italic text-transparent">
                people
              </span>{" "}
              <span className="mt-4 block text-base font-normal text-[#6B7280]">
                Don&apos;t want to fill the form? you can send us a message{" "}
                <span className="font-medium text-[#2563EB]">
                  info@infonerds.ng
                </span>
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
                      label={"Name"}
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
                      label={"Email address"}
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
                      label={"Instagram handle"}
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
                      <FormLabel className="font-medium text-[#4B5563]">
                        Event type
                      </FormLabel>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
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
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel
                                  className={`cursor-pointer rounded-[2rem] border !border-[#E5E7EB] p-4 font-medium ${field.value.includes(item.id) ? "bg-[#2563EB] text-white" : "text-[#4B5563]"}`}
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
                      <FormLabel className="font-medium text-[#4B5563]">
                        Event date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full rounded-2xl border-none bg-[#F3F4F6] p-4 text-left font-medium",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span className="font-medium text-[#9CA3AF]">
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
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
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
                      label={"Shoot location"}
                      fieldState={fieldState}
                      field={field}
                    />
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#4B5563]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="tell us more about what you want.."
                        className="resize-none rounded-2xl border-none bg-[#F3F4F6] p-4"
                        rows={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-btn-gradient rounded-xl p-4 font-medium text-white"
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
