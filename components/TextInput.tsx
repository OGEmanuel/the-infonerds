'use client';

import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ChangeEvent, ReactNode, useEffect } from 'react';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

interface Props {
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  validated?: boolean;
  type?: string;
  label: string;
  placeholder?: string;
  value?: string;
}

export default function TextInput({
  type = 'text',
  label,
  placeholder,
  field,
  fieldState,
  validated,
}: Props) {
  useEffect(() => {
    if (validated && (!field || !fieldState)) {
      throw new Error(
        'field and fieldState prop is required when validated is set to true',
      );
    }
  }, [validated, field, fieldState]);

  return (
    <FormItem className="space-y-2">
      <FormLabel className={`font-medium text-white`}>{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type}
          className={`rounded-2xl border-none bg-gray-300 p-4 font-medium placeholder:text-[#9CA3AF]`}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
