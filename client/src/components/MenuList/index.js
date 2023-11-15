import React from "react";
import { NavLink as Link, useMatches } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";

const MenuItem = (props) => {
  const { item, permissions } = props;
  const matches = useMatches();
  const { children, permission } = item;
  const isAllowed = permission ? permission(permissions) : false;
  const isActiveLink = matches.findIndex((f) => f.pathname === item.link) > -1;

  return isAllowed ? (
    <>
      <Link to={item.link} className={isActiveLink ? "active" : ""}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" color={"text.greyText1"}>
                  {item.name}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </Link>
      {children && (
        <Collapse
          className="sub-menus"
          in={isActiveLink}
          timeout="auto"
          unmountOnExit
        >
          <MenuList items={children} permissions={permissions} />
        </Collapse>
      )}
    </>
  ) : null;
};

const MenuList = (props) => {
  const { items, permissions } = props;

  return (
    <Grid className="menuItems">
      <List>
        {items?.map((item, i) => {
          return (
            <MenuItem
              key={`main_menu_${i}_${item.name}`}
              item={item}
              permissions={permissions}
            />
          );
        })}
      </List>
    </Grid>
  );
};

export default MenuList;
