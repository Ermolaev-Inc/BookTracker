export interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onClick?(args: any): void;
  onChange?(args: any): void;
  [name: string]: any;
}