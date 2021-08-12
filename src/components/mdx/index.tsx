import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { ReactHTMLElement } from "react";
import Link from "next/link";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import styled from "@emotion/styled";
import { useColorMode, Heading } from "@chakra-ui/react";

const Img: React.FC<any> = (props) => {
  return (
    <div>
      <Image {...props} layout="fill" objectFit="none" />
    </div>
  );
};

const Paragraph: React.FC<any> = (props) => {
  if (typeof props.children !== "string" && props.children.type === "img") {
    return <>{props.children}</>;
  }

  return <p {...props} />;
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

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  border-radius: 10px;
  margin-top: 40px;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const LanguageFlag = styled.div`
  content: "";
  position: absolute;
  background-color: inherit;
  text-align: center;
  height: 50px;
  width: 40px;
  right: 8%;
  top: -30px;
  border-radius: 10px;
  padding-top: 5px;
  font-size: 19px;
  font-weight: 500;
  font-family: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
`;

interface ICode {
  language: string;
  codeString: string;
  metaString: string;
  className: string;
}

const WithLineNumbers: React.FC<ICode> = (props) => {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  return (
    <Highlight
      {...defaultProps}
      theme={isDarkMode ? darkTheme : lightTheme}
      code={props.codeString}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <LanguageFlag>{props.language.toUpperCase()}</LanguageFlag>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const preToCodeBlock = (
  preProps: any
): {
  language: string;
  codeString: string;
  metaString: string;
  className: string;
} => {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.type === "code"
  ) {
    // we have a <pre><code> situation
    const { children: codeString, className = "" } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      metaString:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang.split("#")[1]
          : "",
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang.split("#")[0]
          : "",
    };
  }
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
      return <WithLineNumbers {...props} />;
    }

    return <pre {...preProps} />;
  },
  h1: function Headline() {
    return <Heading fontWeight="bold" fontSize="3xl" />;
  },
};

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

  return <Component components={components} />;
};
