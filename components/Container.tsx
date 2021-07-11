import React from "react";
import { Flex, Container as ChakraContainer } from "@chakra-ui/react";

import Header from "./Header";

interface ContainerProps {
  children?: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <ChakraContainer maxW="container.xl">
      <Header />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        px={[0, 4, 4]}
        mx={[4, 8, 8]}
      >
        {children}
      </Flex>
    </ChakraContainer>
  );
}

export default Container;
