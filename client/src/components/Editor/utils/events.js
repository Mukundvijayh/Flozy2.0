import { Transforms, Editor } from "slate";
import { insertMention } from "./mentions";

const HOTKEYS = {
  b: "bold",
  i: "italic",
  u: "underline",
};

export const mentionsEvent = (props) => {
  const { event, mentions, setMentions, chars, editor } = props;
  const { index, target } = mentions;
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
      setMentions({ ...mentions, index: prevIndex });
      break;
    case "ArrowUp":
      event.preventDefault();
      const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
      setMentions({ ...mentions, index: nextIndex });
      break;
    case "Tab":
    case "Enter":
      event.preventDefault();
      Transforms.select(editor, target);
      insertMention(editor, chars[index]);
      setMentions({ ...mentions, target: null });
      break;
    case "Escape":
      event.preventDefault();
      setMentions({ ...mentions, target: null });
      break;
    default:
      break;
  }
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const commands = (props) => {
  const { event, editor } = props;
  if (HOTKEYS[event.key]) {
    event.preventDefault();
    const isActive = isMarkActive(editor, HOTKEYS[event.key]);
    if (isActive) {
      Editor.removeMark(editor, HOTKEYS[event.key]);
    } else {
      Editor.addMark(editor, HOTKEYS[event.key], true);
    }
  }
};
