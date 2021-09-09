import { Box } from "@chakra-ui/layout";
import theme from "styles/theme";

export const Blockquote: React.FC<any> = (props) => {
  return (
    <Box
      {...props}
      backgroundColor="gray.800"
      padding="5"
      borderLeft={`4px solid ${theme.overrides.colors.gradient[200]}`}
      borderRadius="md"
    />
  );
};
