import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import theme from "styles/theme";
import CTAButton from "./CTAButton";
import { keyframes } from "@emotion/react";

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Hero = ({ title }: { title: string }) => {
  const gradient = `linear(to-l, ${theme.overrides.colors.gradient["100"]}, ${theme.overrides.colors.gradient["200"]},)`;

  const { colorMode } = useColorMode();
  const color = { light: "gray.700", dark: "gray.400" };

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        mr={20}
        mb={12}
      >
        <Flex flexDirection="column" gridGap="15px" ml={1} letterSpacing={0.4}>
          <Text
            fontSize={["4.5vw", "3.5vw", "30px"]}
            maxWidth="75ch"
            color={color[colorMode]}
            fontWeight={500}
            textTransform="uppercase"
          >
            Hi! This is a
          </Text>
          <Heading
            fontSize={["13vw", "11vw", "70px"]}
            bgGradient={gradient}
            bgClip="text"
            backgroundSize="200% 200%"
            letterSpacing={1.5}
            mb={2}
            ml={0}
            textTransform="uppercase"
            lineHeight={1}
            animation={`${gradientAnimation} 7s infinite;`}
          >
            {title}
          </Heading>
          <Text
            fontSize={["5vw", "4vw", "30px"]}
            maxWidth="75ch"
            color={color[colorMode]}
            fontWeight={500}
            mb={7}
          >
            Visual Exploration of Programming Concepts
          </Text>
          <CTAButton href="/labs">Start Exploring</CTAButton>
        </Flex>
      </Flex>
    </>
  );
};

Hero.defaultProps = {
  title: "Creative Coding Lab",
};
