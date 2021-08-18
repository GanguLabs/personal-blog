import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { ReactHTMLElement } from "react";
import Link from "next/link";
import { Heading, Text, Box } from "@chakra-ui/react";
import { preToCodeBlock, Code } from "./components/Code";
import { HalfBleed } from "components/layouts/PostLayout";
import theme from "styles/theme";

const Blockquote: React.FC<any> = (props) => {
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

const Img: React.FC<any> = (props) => {
  return (
    <HalfBleed>
      <Image {...props} width="100%" height="50%" layout="responsive" />
    </HalfBleed>
  );
};

const Paragraph: React.FC = (props) => {
  if (typeof props.children !== "string") {
    return <>{props.children}</>;
  }

  return <Text color="gray.300" {...props} />;
};

const Anchor: React.FC<Partial<ReactHTMLElement<HTMLAnchorElement>["props"]>> =
  (props) => {
    const { href, children } = props;

    if (!href) {
      return <a {...props} />;
    }

    return (
      <Link href={href} passHref={true}>
        <a>{children}</a>
      </Link>
    );
  };

export const components = {
  img: Img,
  p: Paragraph,
  a: Anchor,
  pre: function codeBlock(
    preProps: Partial<ReactHTMLElement<HTMLPreElement>["props"]>
  ) {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }

    return <pre {...preProps} />;
  },
  blockquote: Blockquote,
  h1: function Headline(props) {
    return <Heading fontWeight="bold" fontSize="3xl" {...props} />;
  },
  h2: function Headline(props) {
    return <Heading fontWeight="bold" fontSize="2xl" {...props} />;
  },
};

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);
  return <Component components={{ ...components }} />;
};
