import { IMockData } from "./interfaces";
import { ColumnsNames } from "./columnsNames";

export const mockData: IMockData = {
  want: {
    title: ColumnsNames.want,
    items: [
      { _id: "1", title: "Clean Code" }, 
      { _id: "5", title: "Clean Code 2" },
    ],
  },
  bought: {
    title: ColumnsNames.bought,
    items: [{ _id: "2", title: "Clean Code" }],
  },
  reading: {
    title: ColumnsNames.reading,
    items: [{ _id: "3", title: "Clean Code" }],
  },
  hadRead: {
    title: ColumnsNames.hadRead,
    items: [{ _id: "4", title: "Clean Code" }],
  },
};