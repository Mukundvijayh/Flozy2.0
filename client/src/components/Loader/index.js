import * as React from "react";
import { Backdrop, CircularProgress, styled } from "@mui/material";
import Style from "./style";

const Loader = ({ className, open }) => {
  return (
    <div  className={className}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open !== null}
      >
        <div className="loader">
          <div className="loaderText">{open}</div>
          <CircularProgress color="inherit" />
        </div>
      </Backdrop>
    </div>
  );
};

export default styled(Loader)(Style);
