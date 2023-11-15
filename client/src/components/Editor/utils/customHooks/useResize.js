import { useState } from "react";

const useResize = ({ parentDOM, size: defaultSize }) => {
  const { width } = parentDOM?.getBoundingClientRect() || { ...defaultSize };
  const [size, setSize] = useState({
    height: 300,
    widthInPercent: 100,
    ...defaultSize,
  });
  const [resizing, setResizing] = useState(false);

  const onLoad = (dom) => {
    setSize({ widthInPercent: 100, height: 300, ...defaultSize });
  };

  const onMouseDown = () => {
    document.addEventListener("pointermove", onMouseMove);
    document.addEventListener("pointerup", onMouseUp);
    setResizing(true);
  };
  const onMouseUp = () => {
    document.removeEventListener("pointermove", onMouseMove);
    document.removeEventListener("pointerup", onMouseUp);
    setResizing(false);
  };
  const onMouseMove = (e) => {
    setSize((currentSize) => {
      const widthInPX = (currentSize.widthInPercent / 100) * width;
      const calcWidth = widthInPX + e.movementX;
      return {
        width: calcWidth,
        height: currentSize.height + e.movementY,
        widthInPercent: (calcWidth / width) * 100,
      };
    });
  };

  return [size, onMouseDown, resizing, onLoad];
};

export default useResize;
