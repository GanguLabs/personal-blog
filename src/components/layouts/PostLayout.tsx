import React from "react";
import { Grid as ChakraGrid, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Grid = styled(ChakraGrid)`
  & > * {
    grid-column: 3;
  }
  align-items: center;
`;

export const FullBleed: React.FC = ({ children }) => {
  return <Box gridColumn="1/-1">{children}</Box>;
};

export const HalfBleed: React.FC = ({ children }) => {
  return <Box gridColumn="2/5">{children}</Box>;
};

export function PostLayout({ children }) {
  return (
    <Grid templateColumns="0.75fr 0.5fr min(70ch, 100%) 0.5fr 0.75fr">
      {children}
    </Grid>
  );
}
