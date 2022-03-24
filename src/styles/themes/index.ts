import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    mopa: {
      primary: "#1B3B66",
      secondary: "#01579B",
      tertiary: "#305382",
      "400": "#2e5b96",
      "500": "#00bdf2",
      "600": "#0058a6",
      "700": "#00417e",
      "800": "#0d1d42",
      "900": "#23527c",
      "1000": "#007bff",
    },
    amarelo: {
      "500": "#fcee22",
    },
    cinza: {
      "500": " #ededee",
      "600": "#a7a9ac",
      "700": "#e6e6e7",
      "800": "#ebebeb",
    },
  },
  fonts: {
    heading: "Open Sans, Montserrat",
    body: "Open Sans, Montserrat",
    mono: "Open Sans, Montserrat",
  },
  shadows: {
    red: "rgba(255, 0, 0, 0.4) 0px 0px 0px 1px, rgba(255, 0, 0, 0.5) 0px 5px 10px, rgba(255, 0, 0, 0.8) 0px 0px 40px",
  },
  styles: {
    global: {
      "a:hover": {
        textDecoration: "none !important",
      },
      html: {
        "scroll-behavior": "smooth",
      },
    },
  },
});
