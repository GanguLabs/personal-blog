import React from "react";
import { Grid, Box } from "@chakra-ui/react";

export const FullBleed: React.FC = ({ children }) => {
  return <Box gridColumn="1/-1">{children}</Box>;
};

export const HalfBleed: React.FC = ({ children }) => {
  return <Box gridColumn={["1", "1", "1", "2/5"]}>{children}</Box>;
};

export function PostLayout({ children }) {
  return (
    <Grid
      templateColumns={[
        "1fr",
        "1fr",
        "1fr",
        "0.75fr 0.5fr min(75ch, 100%) 0.5fr 0.75fr",
      ]}
      gap="7"
      alignItems="center"
      sx={{
        "& > *": {
          minWidth: 0,
          gridColumn: [1, 1, 1, 3],
        },
      }}
      width={"100%"}
    >
      {children}
    </Grid>
  );
}
