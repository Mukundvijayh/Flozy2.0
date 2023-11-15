import React from "react";

const Table = ({ attributes, children, element }) => {
  return (
    <div style={{ minWidth: "100%", maxWidth: "100%", overflow: "auto" }}>
      <table>
        <tbody {...attributes}>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
