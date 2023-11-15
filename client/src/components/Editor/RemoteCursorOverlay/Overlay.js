import React, { useRef } from "react";
import { useRemoteCursorOverlayPositions } from "@slate-yjs/react";

function Caret({ caretPosition, data }) {
  const caretStyle = {
    ...caretPosition,
    background: data?.color || "#d33d3db5",
  };

  const labelStyle = {
    transform: "translateY(-100%)",
    background: data?.color || "#d33d3db5",
  };

  return (
    <div style={{ ...caretStyle, position: "absolute", width: "0.5px" }}>
      <div
        style={{
          position: "absolute",
          color: "#FFF",
          whiteSpace: "nowrap",
          top: 0,
          ...labelStyle,
        }}
      >
        {data?.name}
      </div>
    </div>
  );
}

function RemoteSelection({ data, selectionRects, caretPosition }) {
  if (!data) {
    return null;
  }

  const selectionStyle = {
    backgroundColor: data.color,
  };

  return (
    <React.Fragment>
      {selectionRects.map((position, i) => (
        <div
          style={{
            ...selectionStyle,
            ...position,
            position: "absolute",
            pointerEvents: "none",
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      ))}
      {caretPosition && <Caret caretPosition={caretPosition} data={data} />}
    </React.Fragment>
  );
}

export function RemoteCursorOverlay({ className, children }) {
  const containerRef = useRef(null);
  const [cursors] = useRemoteCursorOverlayPositions({
    containerRef,
  });

  return (
    <div
      className={`${className}`}
      style={{ position: "relative" }}
      ref={containerRef}
    >
      {children}
      {cursors.map((cursor) => (
        <RemoteSelection key={cursor.clientId} {...cursor} />
      ))}
    </div>
  );
}
