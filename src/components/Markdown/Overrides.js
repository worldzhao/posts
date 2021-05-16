import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HyperLink = ({ children, ...props }) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className="blog-post-anchor"
  >
    {children}
  </a>
);

export const CodeBlock = ({ children }) => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {children.props.children}
  </SyntaxHighlighter>
);