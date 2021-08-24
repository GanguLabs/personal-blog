import { Text } from "@chakra-ui/layout";

export const Paragraph: React.FC = (props) => {
  if (typeof props.children !== "string") {
    return <>{props.children}</>;
  }

  return <Text color="gray.300" {...props} />;
};
