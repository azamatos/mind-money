// material ui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// components
import Auth from "./components/Auth";
import Hero from "./components/Hero";

// lib
import theme from "./lib/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
        }}
      >
        <Auth />
        <Hero />
      </Box>
    </ThemeProvider>
  );
};

export default App;
