const Style = (theme) => ({
  width: 280,
  height: "100%",
  background: theme.palette.containers.sidebar,
  padding: "16px 0px 24px 0px",
  ".MuiListItem-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    "& .MuiButtonBase-root": {
      width: "100%",
    },
  },
  "& .sub-menus": {
    width: "100%",
    paddingLeft: "12px",
  },
  "& .MuiListItemIcon-root": {
    minWidth: "40px",
  },
  "& .MuiListItemButton-root": {
    padding: "8px 24px",
  },
});

export default Style;
