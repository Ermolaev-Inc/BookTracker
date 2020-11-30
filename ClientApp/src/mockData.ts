import { IMockData } from "./interfaces";
import { ColumnsNames } from "./columnsNames";

export const mockData: IMockData = {
  want: {
    title: ColumnsNames.want,
    items: [
      { _id: "1", title: "Clean Code", author: "Robert Martin" },
      { _id: "5", title: "Clean Code 2", author: "Robert Martin 2" },
    ],
  },
  bought: {
    title: ColumnsNames.bought,
    items: [{ _id: "2", title: "Clean Code", author: "Author 1" }],
  },
  reading: {
    title: ColumnsNames.reading,
    items: [{ _id: "3", title: "Clean Code", author: "Author 2" }],
  },
  hadRead: {
    title: ColumnsNames.hadRead,
    items: [{ _id: "4", title: "Clean Code", author: "Author 3" }],
  },
};