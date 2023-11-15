import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { Grid, styled } from "@mui/material";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import LayoutStyle from "./LayoutStyle";
import { logout as authLogout } from "../store/reducers/authReducer";

const PrivateLayout = ({ children, ...props }) => {
  const { className } = props;
  const { user, logout } = useAuth();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authLogout());
    logout();
  };

  return (
    <Grid container className={`${className} privateLayout`}>
      <AppHeader logout={onLogout} />
      <Grid container className="bodyWrapper">
        {/* <Sidebar permissions={user?.permissions} /> */}
        <Grid item className="bodyContainer">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default styled(PrivateLayout)(LayoutStyle);
