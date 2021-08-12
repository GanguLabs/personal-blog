import { Flex, FlexProps } from "@chakra-ui/react";
import theme from "src/styles/theme";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    height="50px"
    alignItems="center"
    justifyContent="center"
    color={theme.colors.gray[400]}
    {...props}
  />
);
