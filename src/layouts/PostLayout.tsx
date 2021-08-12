import React from "react";
import { Grid as ChakraGrid, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Grid = styled(ChakraGrid)`
  & > * {
    grid-column: 2;
  }
`;

export const FullBleed = ({ children }) => {
  return <Box gridColumn="1/-1">{children}</Box>;
};

export function PostLayout({ children }) {
  return <Grid templateColumns="1fr min(65ch, 100%) 1fr">{children}</Grid>;
}
