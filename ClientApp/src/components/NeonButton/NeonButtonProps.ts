export type NeonButtonTypes = {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  neonTextColor?: string;
  neonColor?: string;
}

export interface NeonButtonProps extends NeonButtonTypes {
  title?: string;
  [name: string]: any;
}