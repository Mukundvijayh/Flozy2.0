import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';

const themeType = localStorage.getItem("themeType") || "light"

const getPalette = (themeType) => {
  if (themeType === "light") {
    return {
      primary: {
        main: "#2563EB",
      },
      secondary: {
        main: "#64748B",
      },
      
      grey: {
        main: "#64748B",
        dark: "#B6B4BA",
        light: "#94A3B8",
        lightest: "#F8FAFC",
        border: '#E6EAEE'
      },
      text: {
        primaryText: '#0F172A',
        greyText1: '#64748B',
        greyText2: '#84818A',
        greyText3: '#B6B4BA',
        greyText4: '#778599',
        greyText5: '#94A3B8',
        redText: '#FF3B3B',
        blueText: '#2563EB',
        whiteText: '#ffffff',
        labelText: '#4B4B4B'
      },
      containers: {
        sidebar: '#ffffff',
        card: '#ffffff',
        body: '#F4F6F9',
        blueBg: '#2563EB',
        greyBg1: '#F1F1F1',
        greyBg2: '#F9F9F9',
        greyBg3: '#F8FBFF',
        greyBg4: '#ECEBEB',
        greyBg5: '#F4F4F4'
      },
      colors: {
        green: '#24D164',
        pink: '#ED4F9D',
        blue: '#2563EB',
        red: '#FF3B3B',
        darkGreen: '#0E8E2A'
      },
      type: "light", // This sets the theme type to "light"
    };
  } else {
    return {
      primary: {
        main: "#2563EB",
      },
      secondary: {
        main: "#64748B",
      },
      grey: {
        main: "#64748B",
        dark: "#B6B4BA",
        light: "#94A3B8",
        lightest: "#F8FAFC",
        border: '#E6EAEE'
      },
      text: {
        primaryText: '#ffffff',
        greyText1: '#A7AEC1',
        greyText2: '#84818A',
        greyText3: '#B6B4BA',
        greyText4: '#778599',
        greyText5: '#94A3B8',
        redText: '#FF3B3B',
        blueText: '#2563EB',
        whiteText: '#ffffff',
        labelText: '#4B4B4B'
      },
      containers: {
        sidebar: '#202427',
        card: '#222538',
        body: '#222222',
        blueBg: '#2563EB',
        greyBg1: '#F1F1F1',
        greyBg2: '#F9F9F9',
        greyBg3: '#F8FBFF',
        greyBg4: '#ECEBEB',
        greyBg5: '#F4F4F4'
      },
      colors: {
        green: '#24D164',
        pink: '#ED4F9D',
        blue: '#2563EB',
        red: '#FF3B3B',
        darkGreen: '#0E8E2A'
      },
      type: "dark",
    };
  }
};

const theme = createTheme({
  palette: getPalette(themeType),
  components,
  typography,
});

export default theme;