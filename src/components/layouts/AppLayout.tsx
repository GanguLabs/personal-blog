import React from "react";
import {
  Flex,
  Container as ChakraContainer,
  Text,
  FlexProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../shared/Navigation/Navbar";
import { Footer } from "../shared/Footer";
import { useRouter } from "next/router";

interface ContainerProps {
  children?: React.ReactNode;
}

const MotionFlex = motion<FlexProps>(Flex);

function Container({ children }: ContainerProps) {
  const router = useRouter();
  return (
    <ChakraContainer
      maxW="container.xl"
      minH="100vh"
      h="100vh"
      padding="0 25px"
    >
      <Flex as="div" flexDir="column" minHeight="100%">
        <Navbar />
        <MotionFlex
          as="main"
          flexGrow={1}
          flexDir="column"
          key={router.route}
          alignItems="center"
          initial="initial"
          animate="animate"
          exit="exit"
          transitionDuration="10ms"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
            },
          }}
        >
          {children}
        </MotionFlex>
        <Footer>
          <Text>Made with ❤️ by Christoph Lindstädt.</Text>
        </Footer>
      </Flex>
    </ChakraContainer>
  );
}

export default Container;
