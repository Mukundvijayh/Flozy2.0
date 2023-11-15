import React from "react";
import { Transforms, Element } from "slate";
import { useFocused, useSelected, useSlateStatic } from "slate-react";

const GridItem = (props) => {
  const { attributes, children, element } = props;
  const { grid } = element;
  const editor = useSlateStatic();
  const selected = useSelected();
  const itemWidth = ((grid || 6) / 12) * 100;

  const onItemSizeDecrease = () => {
    Transforms.setNodes(
      editor,
      { grid: grid <= 1 ? 1 : grid - 1 },
      {
        match: (node) => {
          return Element.matches(node, element);
        },
      }
    );
  };

  const onItemSizeIncrease = () => {
    Transforms.setNodes(
      editor,
      { grid: grid >= 12 ? 12 : grid + 1 },
      {
        match: (node) => {
          return Element.matches(node, element);
        },
      }
    );
  };

  const GridItemToolbar = () => {
    return selected ? (
      <div contentEditable={false} className="grid-item-toolbar">
        <button onClick={onItemSizeDecrease}>-</button>
        <button onClick={onItemSizeIncrease}>+</button>
      </div>
    ) : null;
  };

  return (
    <div
      className={`grid-item xs-${grid}`}
      {...attributes}
      style={{ width: `${itemWidth}%` }}
    >
      {children}
      <GridItemToolbar />
    </div>
  );
};

export default GridItem;
