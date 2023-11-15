import React from "react";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { insertGrid } from "../../utils/grid";

const GridButton = (props) => {
  const { editor } = props;
  const handleInsertGrid = () => {
    insertGrid(editor);
  };
  return (
    <button
      onClick={handleInsertGrid}
      title="Layout"
      style={{ marginLeft: "8px" }}
    >
      <ViewComfyIcon />
    </button>
  );
};

export default GridButton;
