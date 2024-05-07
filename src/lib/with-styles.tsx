import { ComponentProps, ElementType, createElement, forwardRef } from "react";

import { cx, css } from "@/styles/css";
import { SystemStyleObject } from "@/styles/types";

export const withStyles = <T extends ElementType>(
  Component: T,
  stylesClass?: string
) => {
  const StyledComponent = forwardRef(
    (props: ComponentProps<T> & { css?: SystemStyleObject }, ref) => {
      const { css: cssProp, ...restProps } = props;
      return createElement(Component, {
        ref,
        ...restProps,
        className: cx(css(cssProp), stylesClass, restProps.className),
      });
    }
  );

  // @ts-ignore
  StyledComponent.displayName = Component.displayName ?? Component.name;
  return StyledComponent;
};
