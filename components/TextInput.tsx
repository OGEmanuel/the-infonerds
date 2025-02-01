'use client';

import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useEffect } from 'react';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import useThemeStore from '@/store/theme-control';

interface Props {
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  validated?: boolean;
  type?: string;
  label: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export default function TextInput({
  type = 'text',
  label,
  placeholder,
  field,
  fieldState,
  validated,
  disabled,
}: Props) {
  const { theme } = useThemeStore();
  useEffect(() => {
    if (validated && (!field || !fieldState)) {
      throw new Error(
        'field and fieldState prop is required when validated is set to true',
      );
    }
  }, [validated, field, fieldState]);

  return (
    <FormItem className="space-y-2">
      <FormLabel
        className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        {label}
      </FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type}
          className={`rounded-2xl border-none p-4 font-medium ${theme === 'light' ? 'bg-[#f9f9f9] text-black placeholder:text-[#6B7280]' : 'bg-[#1e1e1e] text-[#f8f8f8] placeholder:text-[#9CA3AF]'}`}
          disabled={disabled}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
