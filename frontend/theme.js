
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6fffa",
      100: "#bff0ea",
      200: "#99e6dd",
      300: "#4fd6c6",
      400: "#00c4ae",
      500: "#009e8b",
      600: "#007a6a",
      700: "#005a4d",
      800: "#01362b",
      900: "#001814",
    },
  },
  components: {
    Button: { baseStyle: { boxShadow: "none", borderRadius: 8 } },
    Card: { baseStyle: { boxShadow: "none" } },
  },
  styles: {
    global: {
      body: { background: "gray.50" }
    }
  }
});

export default theme;
