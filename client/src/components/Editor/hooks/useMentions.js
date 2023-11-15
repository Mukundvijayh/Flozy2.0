import { useEffect, useState } from "react";
import { Editor, Range } from "slate";

const useMentions = (props) => {
  const { editor, selection } = props;
  const [mentions, setMentions] = useState({
    target: null,
    index: null,
    search: null,
  });

  useEffect(() => {
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: "word" });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/);
      const after = Editor.after(editor, start);
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch = afterText.match(/^(\s|$)/);

      if (beforeMatch && afterMatch) {
        setMentions({
          target: beforeRange,
          search: beforeMatch[1],
          index: 0,
        });
      }
    } else {
      setMentions({
        target: null,
        search: null,
        index: null,
      });
    }
  }, [selection, editor]);

  return [mentions, setMentions];
};

export default useMentions;
