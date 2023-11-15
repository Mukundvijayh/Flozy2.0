import { Transforms } from "slate";
import { gridItem } from "./gridItem";

export const insertGrid = (editor) => {
  const grid = {
    type: "grid",
    grid: "container",
    children: [{ ...gridItem() }],
  };
  Transforms.insertNodes(editor, grid);
  Transforms.move(editor);
};
