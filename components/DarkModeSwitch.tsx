import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import lightModeSound from "../assets/sounds/light-mode.mp3";
import darkModeSound from "../assets/sounds/light-mode.mp3";

import useSound from "use-sound";

export function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  const [play] = useSound(isDarkMode ? lightModeSound : darkModeSound);

  const iconColor = {
    light: "black",
    dark: "white",
  };

  const handleClick = () => {
    toggleColorMode();
    play();
  };

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={handleClick}
      color={iconColor[colorMode]}
    />
  );
}
