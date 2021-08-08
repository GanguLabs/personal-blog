import React from "react";
import { keyframes } from "@emotion/react";
import { Button, useColorMode } from "@chakra-ui/react";
import theme from "src/styles/theme";

import { useRouter } from "next/router";

const pulse = keyframes`
0% {
    box-shadow: 0 0 0 0 ${theme.overrides.colors.gradient["200"]};
}

30% {
    box-shadow: 0 0 0 18px rgba(0,0,0,0)
}

100% {
    box-shadow: 0 0 0 0px rgba(0,0,0,0)
}
`;

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const CTAButton: React.FC<ButtonProps> = ({ children, href }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const isDarkmode = colorMode === "dark";

  const handleClick = () => router.push(href);

  return (
    <Button
      variant={isDarkmode ? "outline" : "solid"}
      height={["2.8rem", "3.2rem"]}
      color={isDarkmode && theme.overrides.colors.gradient["200"]}
      borderColor={theme.overrides.colors.gradient["200"]}
      backgroundColor={!isDarkmode && theme.overrides.colors.gradient["200"]}
      boxShadow="0 0 0 0 rgba(0, 0, 0, 1);"
      transform="scale(1)"
      animation={`${pulse} 5s 3s infinite;`}
      width={["10rem", "12rem"]}
      fontSize={[14, 17]}
      _hover={{
        backgroundColor: `${theme.overrides.colors.gradient["200"]}`,
        color: "black",
      }}
      textTransform="uppercase"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
