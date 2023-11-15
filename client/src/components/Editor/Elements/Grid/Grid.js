import React from "react";
import { Transforms, Path } from "slate";
import { useSelected, useSlateStatic } from "slate-react";
import { gridItem } from "../../utils/gridItem";

const Grid = (props) => {
  const { attributes, children, element } = props;
  const { grid } = element;
  const editor = useSlateStatic();
  const selected = useSelected();

  const onAddGridItem = () => {
    const currentPath = editor.selection?.anchor?.path;
    const ancestorsPath = Path.ancestors(currentPath, { reverse: true });
    const insertPath = ancestorsPath[1];
    if (insertPath) {
      insertPath[insertPath.length - 1] = element.children.length;
      Transforms.insertNodes(editor, [{ ...gridItem() }], {
        at: insertPath,
      });
      // new line
      Transforms.insertNodes(
        editor,
        [{ type: "paragraph", children: [{ text: "" }] }],
        {
          at: [editor.children.length],
        }
      );
    }
  };

  const GridToolBar = () => {
    return selected ? (
      <div className="grid-container-toolbar" contentEditable={false}>
        <button onClick={onAddGridItem}>+ Add Item</button>
      </div>
    ) : null;
  };

  return (
    <div className={`grid-container ${grid}`} {...attributes}>
      <GridToolBar />
      {children}
    </div>
  );
};

export default Grid;
