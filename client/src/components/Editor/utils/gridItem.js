import { Transforms } from "slate";

export const gridItem = () => {
  return {
    type: "grid-item",
    grid: 6,
    children: [
      {
        type: "paragraph",
        children: [{ text: `Grid Item Text - ${new Date().getTime()}` }],
      },
    ],
  };
};

export const insertGridItem = (editor) => {
  Transforms.insertNodes(editor, { ...gridItem() });
  Transforms.move(editor);
};
