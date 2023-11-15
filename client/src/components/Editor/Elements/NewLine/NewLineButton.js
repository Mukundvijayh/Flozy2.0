import React from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Transforms } from "slate";
import { useSlateStatic } from "slate-react";

const NewLineButton = (props) => {
  const editor = useSlateStatic();

  const onAddNewLine = () => {
    Transforms.insertNodes(
      editor,
      [
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ],
      { at: [editor.children.length] }
    );
  };

  return (
    <button title="New Line" onClick={onAddNewLine}>
      <KeyboardReturnIcon />
    </button>
  );
};

export default NewLineButton;
