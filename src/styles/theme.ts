import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const FONTS_STRING = `Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`;

// const fonts = {
//   body: FONTS_STRING,
//   heading: FONTS_STRING,
// };

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

const styles = {
  global: (props) => {
    return {
      body: {
        fontFamily: FONTS_STRING,
        color: mode("gray.900", "whiteAlpha.900")(props),
        backgroundColor: mode("gray.50", "gray.900")(props),
        lineHeight: "1.8",
      },
      canvas: {
        width: "100%",
        height: "100%",
      },
      pre: {
        fontFamily: "monospace",
        fontSize: "15px",
        lineHeight: "1.4",
      },
    };
  },
};

const overrides = {
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  colors,
};

const theme = extendTheme({ overrides, styles, config });

export default theme;
