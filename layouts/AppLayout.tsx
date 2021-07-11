import React from "react";
import {
  Flex,
  Container as ChakraContainer,
  useColorMode,
  Text,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";

import { Footer } from "../components/Footer";

interface ContainerProps {
  children?: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };
  const color = { light: "black", dark: "white" };

  return (
    <ChakraContainer
      maxW="container.xl"
      minH="100vh"
      h="100vh"
      //   bg={bgColor[colorMode]}
      //   color={color[colorMode]}
    >
      <Flex as="div" flexDir="column" minHeight="100%">
        <Navbar />
        <Flex
          as="main"
          flexGrow={1}
          flexDir="column"
          //   bg={bgColor[colorMode]}
          //   color={color[colorMode]}
        >
          {children}
        </Flex>
        <Footer>
          <Text>Made with ❤️ by Christoph Lindstädt.</Text>
        </Footer>
      </Flex>
    </ChakraContainer>
  );
}

export default Container;
