export type ColumnTypes = {
  backgroundColor?: string;
  textColor?: string;
}

export interface ColumnProps extends ColumnTypes {
  title?: string;
  [name: string]: any;
}