import { type Dispatch, type SetStateAction, type InputHTMLAttributes } from 'react';

type OptionValue = string | number | readonly string[] | undefined;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export type { OptionValue, InputProps };
