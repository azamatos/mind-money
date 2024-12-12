import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    h1: { fontSize: 40, lineHeight: 1.2, fontWeight: 700 },
    caption: { fontSize: 14, fontWeight: 400, color: "#A6ABB0" },
    fontSize: 10,
    fontFamily: "Inter",
  },
  palette: {
    mode: "light",
    background: {
      default: "#F4F4F4",
      paper: "#FFFFFF",
    },
    info: { main: "#FFFFFF" },
    primary: {
      main: "#526ED3",
    },
    secondary: {
      main: "#A6ABB0",
    },
    success: {
      main: "#51D85E",
    },
    error: {
      main: "#EF4E57",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#526ED3",
          ":disabled": "#A1B1E7",
        },
      },
    },
  },
});

export default theme;
