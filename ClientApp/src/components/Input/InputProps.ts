export type InputTypes = {
  fontWeight?: number;
  fontSize?: string;
  borderBottomColor?: string;
  borderBottomColorFocus?: string;
}

export interface InputProps extends InputTypes {
  className?: string;
  type?: string;
  placeholder?: string;
  [name: string]: any;
}