import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./styles/theme";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
