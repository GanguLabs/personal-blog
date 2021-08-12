import React from "react";
import { Icon, useColorMode } from "@chakra-ui/react";
import theme from "src/styles/theme";

const Logo = () => {
  const { colorMode } = useColorMode();

  const color = { light: "gray.900", dark: "gray.100" };

  return (
    <Icon
      width="771"
      height="444"
      viewBox="0 0 771 444"
      xmlns="http://www.w3.org/2000/svg"
      fill={color[colorMode]}
      boxSize={100}
      transition="all 0.3s ease"
      _hover={{
        fill: theme.overrides.colors.gradient["200"],
        transform: "translateY(-1.5px)",
      }}
    >
      <path d="M770.02 12H770v321H502v-12h256V12H12v309h256v12H0V0h770.02v12z" />
      <path d="M92.37 167.13c-2.73-1.23-4.09-3.12-4.09-5.67 0-1.32.35-2.47 1.06-3.44a7.34 7.34 0 013.03-2.37l70.36-31.15c1.93 2.72 2.9 5.45 2.9 8.18a8.7 8.7 0 01-1.58 5.15 9.92 9.92 0 01-4.49 3.43l-48.44 20.2 48.3 20.2c1.86.7 3.26 1.88 4.23 3.56a9.53 9.53 0 011.59 5.4c0 2.65-.84 5.24-2.51 7.8l-70.36-31.29zM275.01 201.19c-5.63 0-10.64-1.01-15.05-3.04a24.7 24.7 0 01-10.16-8.45 22.46 22.46 0 01-3.56-12.4v-19.54c0-4.84 1.19-9.15 3.56-12.94a24.91 24.91 0 0110.16-8.84c4.32-2.11 9.25-3.17 14.79-3.17 5.2 0 9.81.75 13.86 2.25 4.05 1.5 7.17 3.6 9.37 6.33a13.5 13.5 0 013.43 9.11 7.47 7.47 0 01-3.43 6.47c-2.2 1.5-5.1 2.11-8.71 1.85 0-3.88-1.32-7.04-3.96-9.5-2.64-2.47-6.03-3.7-10.17-3.7-4.13 0-7.52 1.18-10.16 3.56-2.64 2.38-3.96 5.46-3.96 9.24v17.95c0 3.52 1.32 6.38 3.96 8.58 2.73 2.2 6.2 3.3 10.43 3.3 4.13 0 7.52-1.19 10.16-3.56a12.26 12.26 0 003.96-9.37l1.85-.14c3.08 0 5.59.8 7.52 2.38a7.14 7.14 0 012.9 5.94 14 14 0 01-3.42 9.24c-2.2 2.64-5.37 4.7-9.5 6.2A39.82 39.82 0 01275 201.2zM323.67 200a8.35 8.35 0 01-8.32-8.45v-73c0-4.13 1.28-7.17 3.83-9.1 2.64-2.03 6.65-3.04 12.01-3.04v79.73h37.36c3.78 0 6.64 1.19 8.58 3.56 2.02 2.3 3.04 5.72 3.04 10.3h-56.5zM402.6 125.29c-2.9 0-5.32-.88-7.25-2.64a9.1 9.1 0 01-2.9-6.87 8.7 8.7 0 012.9-6.73 10.39 10.39 0 017.25-2.64c2.9 0 5.33.88 7.26 2.64a8.7 8.7 0 012.9 6.73 9.1 9.1 0 01-2.9 6.87 10.39 10.39 0 01-7.25 2.64zM395.21 142.32c0-3.35 1.24-5.77 3.7-7.26 2.46-1.5 6.16-2.25 11.09-2.25v58.87c0 3.35-1.24 5.77-3.7 7.26-2.46 1.5-6.16 2.25-11.09 2.25v-58.87zM436.17 201.19a9.77 9.77 0 01-7-2.77 9.32 9.32 0 01-2.77-6.87c0-2.73.93-5.01 2.77-6.86a9.77 9.77 0 017-2.77c2.73 0 5.06.92 7 2.77a9.1 9.1 0 012.9 6.86 9.1 9.1 0 01-2.9 6.87 9.77 9.77 0 01-7 2.77zM605.25 108.13a9.56 9.56 0 013.83-4.1 10.87 10.87 0 015.55-1.45c2.99 0 5.9 1.02 8.7 3.04l-46.72 93.72a8.78 8.78 0 01-3.83 3.96 10.17 10.17 0 01-5.4 1.45c-3 0-5.9-1.05-8.72-3.17l46.6-93.45zM636.84 198.42a14.07 14.07 0 01-2.5-7.8c0-2.02.48-3.82 1.45-5.4a8.68 8.68 0 014.35-3.57l48.32-20.2L640 141.27a9.92 9.92 0 01-4.49-3.43 8.7 8.7 0 01-1.58-5.15c0-2.73.97-5.46 2.9-8.18l70.36 31.15a6.45 6.45 0 012.9 2.37c.8.97 1.2 2.12 1.2 3.44 0 2.55-1.37 4.44-4.1 5.67l-70.36 31.29zM381.44 305.33h-48.81a3.16 3.16 0 010-6.33h48.8a3.16 3.16 0 010 6.33zM407.91 315.27h-75.28a3.16 3.16 0 000 6.33h75.28a3.16 3.16 0 100-6.33zM332.63 331.54h75.28a3.16 3.16 0 110 6.33h-75.28a3.16 3.16 0 010-6.33zM407.91 346.85h-75.28a3.16 3.16 0 000 6.33h75.28a3.16 3.16 0 100-6.33z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M352 380.42a3.16 3.16 0 010 4.5l-12.6 12.47a3.16 3.16 0 01-4.46 0 19.85 19.85 0 01-5.94-14.2c0-5.61 2.4-11 6.57-14.8a3.16 3.16 0 014.36.1l12.06 11.93zm-16.67 2.77c0 2.6.73 5.1 2.09 7.25l7.85-7.77-7.43-7.35a13.66 13.66 0 00-2.51 7.87z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M379.58 368.99a20.2 20.2 0 00-14.3-5.87c-5.07 0-9.93 1.87-13.67 5.27a3.17 3.17 0 00-.1 4.59l9.8 9.7-10.33 10.22a3.16 3.16 0 000 4.5 20.2 20.2 0 0014.3 5.86c11.17 0 20.25-9 20.25-20.07 0-5.37-2.11-10.41-5.94-14.2zm-20.95 2.13a14.01 14.01 0 0113.97.38l-6.8 6.72-7.17-7.1zm6.65 25.81c-2.63 0-5.14-.71-7.32-2.04l19.15-18.95a13.53 13.53 0 012.09 7.25c0 7.58-6.25 13.74-13.92 13.74z"
      />
      <path d="M446.88 420.88a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM417.63 413a3.37 3.37 0 100-6.75 3.37 3.37 0 000 6.75zM473.88 413a3.37 3.37 0 11-6.75 0 3.37 3.37 0 016.75 0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M496.4 438.34a17.92 17.92 0 01-12.78 5.04h-98.24c-4.78 0-9-1.78-12.63-5.33a18.6 18.6 0 01-5.75-13.1l.57-1.15c0-.94.07-1.87.19-2.8H300V266h34v-15h70v15h34v30h20.92c1.53 0 2.96.62 4.3 1.87a5.6 5.6 0 012.01 4.18c0 1.53-.67 2.97-2 4.31-1.35 1.35-2.78 2.02-4.31 2.02h-6.04v42.89L498.27 412a24.22 24.22 0 013.73 12.95v.58c-.2 5.18-2.06 9.45-5.6 12.8zM308 413V274h26v15h70v-15h26v22h-19.92c-1.53 0-2.96.62-4.3 1.87a5.6 5.6 0 00-2.01 4.18c0 1.53.67 2.97 2 4.31 1.35 1.35 2.78 2.02 4.31 2.02h6.04v42.31l-44.81 60.74a28.7 28.7 0 00-.9 1.57H308zm111.28-45.04l-3.16 3.46-12.35 16.11h61.46l-12.35-16.7-3.16-3.73c-4.4-5.57-7.47-12.86-9.19-21.88v-36.84h-12.06v37.42a55.61 55.61 0 01-9.2 22.16zm-24.7 32.53l-13.5 18.42c-1.15 1.15-1.73 2.97-1.73 5.47 0 1.72.62 3.26 1.87 4.6a5.59 5.59 0 004.16 2.02h98.24c1.53 0 2.92-.67 4.16-2.02a6.58 6.58 0 001.87-4.6c-.77-3.26-1.34-5.09-1.72-5.47l-13.5-18.42h-79.86zM342 259v22h54v-22h-54z"
      />
    </Icon>
  );
};

export default Logo;