import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const FONTS_STRING = `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;

const fonts = {
  body: FONTS_STRING,
  heading: FONTS_STRING,
};

const colors = {
  gradient: {
    100: "#48f456",
    200: "#47ffb3",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.900", "whiteAlpha.900")(props),
      backgroundColor: mode("white", "gray.900")(props),
      lineHeight: "base",
    },
  }),
};

const overrides = {
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  config,
  styles,
  colors,
};

const theme = extendTheme({ overrides });

export default theme;
