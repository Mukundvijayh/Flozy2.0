import React from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
  styled,
} from "@mui/material";
import Style from "./style";
import { BellIcon, FlozyLogo, SearchIcon } from "../../assets/svg";

const AppHeaderComponent = (props) => {
  const { logout, className } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      className={className}
    >
      <Grid item>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FlozyLogo />
          <Typography variant="h4" sx={{ ml: 1 }} color={"text.primaryText"}>
            Flozy
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={logout}>
                {/* <ListItemIcon>
                <InboxIcon />
              </ListItemIcon> */}
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>
      </Grid>
    </Grid>
  );
};

const AppHeader = styled(AppHeaderComponent)(({ theme }) => Style(theme));

export default AppHeader;
