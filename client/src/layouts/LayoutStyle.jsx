import theme from "../theme";

const Style = {
  background: '#F4F6F9',
  height: '100%',
  alignContent: 'baseline',
  '.loginLeftContainer': {
    background: "#2563EB",
    height: "100%",
    padding: "30px",
    "& .slick-slider": {
      display: "flex",
      alignItems: "center",
      height: "calc(100% - 34px)",
    },
    "& .slick-slide img": {
      margin: "auto",
      paddingBottom: "24px",
    },
    "& .slick-list": {
      width: "100%",
    },
    "& .slick-dots li button:before": {
      fontSize: "10px",
      color: "#fff",
    },
    "& .slick-dots li": {
      margin: "0 2px",
    },
    "& .MuiTypography-root": {
      color: "#fff !important",
    },
    "& .description": {
      paddingTop: 10,
      color: "#F8FAFC !important",
    },
    "@media only screen and (max-width: 768px)": {
      "&.MuiGrid-root": {
        display: "none",
      },
    },
  },
  '.logo': {
    maxWidth: "100%",
    height: 34,
    width: 34,
    objectFit: "cover",
    cursor: "pointer",
  },
  '.mobileLogo': {
    display: "none",
    padding: "16px 0px",
    "@media only screen and (max-width: 768px)": {
      "&.MuiGrid-root": {
        display: "flex !important",
      },
    },
  },
  '.loginRightContainer': {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  '.loginContainer': {
    width: '100%',
    maxWidth: '480px',
    padding: '21px'
  },
  '.bodyWrapper': {
    height: 'calc(100% - 80px)'
  },
  '.bodyContainer': {
    padding: '24px',
    flex:1,
    height: '100%',
    overflowY: 'auto',
    background: theme.palette.containers.body
  }
};

export default Style;
