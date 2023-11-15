import React, { useState } from "react";
import { Grid, styled } from "@mui/material";
import Style from "./style";
import SwitchComponent from "../Switch";
import MenuList from "../MenuList";
import { MenuDatas } from "../MenuList/MenuDatas";

const SidebarComponent = (props) => {
  const { className, permissions } = props;

  const [themeType, setThemeType] = useState(
    localStorage.getItem("themeType") || "light"
  );

  //theme type saving
  const toggleThemeType = () => {
    const newThemeType = themeType === "light" ? "dark" : "light";
    setThemeType(newThemeType);
    localStorage.setItem("themeType", newThemeType); // Store the theme type in localStorage
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      className={className}
    >
      <MenuList items={MenuDatas} permissions={permissions} />

      <Grid className="themeChange">
        {/* <FormControlLabel
          value="themode"
          control={<Switch color="primary" size="small" />}
          label="Light mode"
          labelPlacement="start"
        /> */}
        <SwitchComponent
          label={themeType !== "dark" ? "Light Theme" : "Dark Theme"}
          onClick={() => {
            toggleThemeType();
          }}
          checked={themeType === "dark"}
        />
      </Grid>
    </Grid>
  );
};

// export default styled(Sidebar)(Style);
const Sidebar = styled(SidebarComponent)(({ theme }) => Style(theme));

export default Sidebar;
