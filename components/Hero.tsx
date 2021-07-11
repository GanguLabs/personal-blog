import { Flex, Heading, Text, Box, useColorMode } from "@chakra-ui/react";
import theme from "styles/theme";

export const Hero = ({ title }: { title: string }) => {
  const gradient = `linear(to-l, ${theme.overrides.colors.gradient["100"]}, ${theme.overrides.colors.gradient["200"]})`;

  const { colorMode } = useColorMode();

  const color = { light: "gray.700", dark: "gray.500" };

  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Flex flexDirection="column" gridGap="15px" textTransform="uppercase">
          <Heading
            fontSize={["5vw", "10vw", "7vw", "7vw", "4.5vw"]}
            bgGradient={gradient}
            bgClip="text"
          >
            {title}
          </Heading>
          <Text
            fontSize={["2vw", "4vw", "3vw", "3vw", "1.75vw"]}
            ml={1}
            maxWidth="75ch"
            color={color[colorMode]}
            fontWeight={500}
          >
            An Interactive Blog and Playground to explore Algorithms, Data
            Structures, Simulations and Libraries.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

Hero.defaultProps = {
  title: "Creative Coding Lab",
};
