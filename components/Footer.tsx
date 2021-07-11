import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    height="50px"
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);
