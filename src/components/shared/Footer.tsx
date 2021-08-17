import { Flex, FlexProps } from "@chakra-ui/react";
import theme from "styles/theme";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    height="100px"
    alignItems="center"
    justifyContent="center"
    color={theme.colors.gray[400]}
    fontSize={["sm", "md", "md"]}
    {...props}
  />
);
