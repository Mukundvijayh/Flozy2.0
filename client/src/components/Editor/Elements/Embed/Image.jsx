import React, { useEffect, useState } from "react";
import {
  useSlateStatic,
  useSelected,
  useFocused,
  ReactEditor,
} from "slate-react";
import { Node, Transforms } from "slate";
import Icon from "../../common/Icon";
import useResize from "../../utils/customHooks/useResize.js";

const Image = ({ attributes, element, children }) => {
  const { url, alt } = element;
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();
  const [parentDOM, setParentDOM] = useState(null);
  const [size, onMouseDown, resizing, onLoad] = useResize({
    parentDOM,
    size: element?.size,
  });
  const arr = Array.from(Node.elements(editor));
  const ele = arr.find(([elem]) => element === elem);

  useEffect(() => {
    if (editor && ele[1] !== undefined) {
      const dom = ReactEditor.toDOMNode(editor, Node.get(editor, ele[1]));
      setParentDOM(dom);
      onLoad(dom);
    }
  }, []);

  useEffect(() => {
    if (!resizing) {
      Transforms.setNodes(editor, {
        size: size,
      });
    }
  }, [resizing]);

  return (
    <div
      {...attributes}
      className="embed"
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "100%",
        boxShadow: selected && focused && "0 0 3px 3px lightgray",
      }}
      {...element.attr}
    >
      <div
        contentEditable={false}
        style={{
          position: "relative",
          width: size.widthInPercent
            ? `${size.widthInPercent}%`
            : `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        <img alt={alt} src={url} />
        {selected && (
          <button
            onPointerDown={onMouseDown}
            style={{
              width: "15px",
              height: "15px",
              opacity: 1,
              background: "transparent",
            }}
          >
            <Icon icon="resize" />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
export default Image;
