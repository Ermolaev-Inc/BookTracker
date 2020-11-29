export interface IMockData {
  [name: string]: IColumn;
}

export interface IColumn {
  title: string;
  items: IBook[];
}

interface IBook {
  _id: string;
  title: string;
  //author: string;
}