import React, { useRef, useEffect } from "react";
import { Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { insertMention } from "../utils/mentions";

const MentionsPopup = (props) => {
  const { editor, index, target, chars, mentions, setMentions } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (target && chars.length > 0) {
      const el = ref.current;
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.scrollY + 24}px`;
      el.style.left = `${rect.left + window.scrollX}px`;
    }
  }, [chars.length, editor, index, target]);

  return target && chars.length > 0 ? (
    <div
      ref={ref}
      style={{
        top: "-9999px",
        left: "-9999px",
        position: "absolute",
        zIndex: 1,
        padding: "3px",
        background: "white",
        borderRadius: "4px",
        boxShadow: "0 1px 5px rgba(0,0,0,.2)",
      }}
      data-cy="mentions-portal"
    >
      {chars.map((char, i) => (
        <div
          key={char}
          onClick={() => {
            Transforms.select(editor, target);
            insertMention(editor, char);
            setMentions({ ...mentions, target: null });
          }}
          style={{
            padding: "1px 3px",
            borderRadius: "3px",
            background: i === index ? "#B4D5FF" : "transparent",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  ) : null;
};

export default MentionsPopup;
