import * as React from "react";

import type { SystemStyleObject } from "@/styles/types";
import { css, cx } from "@/styles/css";

// if you want to support ref forwarding, follow this guide:
// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

type TextTags = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";

type TextElement = React.ElementType<any, TextTags>;

export type TextProps<C extends TextElement> =
  React.ComponentPropsWithoutRef<C> & {
    as?: C;
    css?: SystemStyleObject;
  };

export const Text = <C extends TextElement = "span">(props: TextProps<C>) => {
  const { as, css: cssProp, fontWeight, textStyle, ...textProps } = props;
  const Component = as || "span";

  return (
    <Component {...textProps} className={cx(css(cssProp), props.className)} />
  );
};
