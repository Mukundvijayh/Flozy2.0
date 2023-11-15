import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import Style from "./LayoutStyle";
import LoginBg from "../assets/img/loginBg.png";
import LogoWhite from "../assets/img/logoWhite.svg";

const PublicLayout = ({ children, ...props }) => {
  const { className } = props;
  const authBanners = [
    {
      title: "1% better, everyday!",
      desc: "Everything you need in the one place",
      img: LoginBg,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container className={`${className} h-100`}>
      <Grid item xs={12} sm={6} className={"loginLeftContainer"}>
        <Grid container alignItems="center">
          <img className={"logo"} src={LogoWhite} alt="Logo" />
          <Typography variant="h3" sx={{ pl: 1 }}>
            Flozy
          </Typography>
        </Grid>
        <Slider {...settings}>
          {authBanners.map((item) => (
            <Grid key={item.title} align="center">
              <img src={item.img} alt="banner Imag" className="mw-100" />
              <Typography variant="h2" className="fw-700" align="center">
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                className="description"
                align="center"
              >
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Slider>
      </Grid>
      <Grid item sm={6} xs={12} className={"loginRightContainer"}>
        {children}
      </Grid>
    </Grid>
  );
};

export default styled(PublicLayout)(Style);
