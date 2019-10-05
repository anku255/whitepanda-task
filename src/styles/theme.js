import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: "#e3f9f7",
      100: "#c4f3ef",
      200: "#a0ece5",
      300: "#77e3da",
      400: "#44d9cd",
      500: "#3ebcb3",
      600: "#00b8a9",
      700: "#00a294",
      800: "#00867b",
      900: "#006159"
    }
  }
};

export { customTheme };
