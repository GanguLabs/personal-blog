import { ReactHTMLElement } from "react";
import { Heading } from "@chakra-ui/react";

import { preToCodeBlock, Code } from "./Code";
import { Blockquote } from "./Blockquote";
import { Img } from "./Image";
import { Paragraph } from "./Paragraph";
import { Anchor } from "./Anchor";

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
