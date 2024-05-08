import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  createElement,
  forwardRef,
} from "react";

import { cx, css } from "@/styles/css";
import { SystemStyleObject } from "@/styles/types";

export const withStyles = <T extends ElementType>(
  Component: T,
  stylesClass?: string,
  cssOverrides?: SystemStyleObject // allow adding default props
) => {
  const StyledComponent = forwardRef<ElementRef<T>, PropsWithCss<T>>(
    (props, ref) => {
      const { className, css: cssProp, ...restProps } = props;
      const cssStyles = css(cssOverrides, cssProp);
      return createElement(Component, {
        ref,
        className: cx(cssStyles, stylesClass, className),
        ...restProps,
      });
    }
  );

  // @ts-ignore
  StyledComponent.displayName = Component.displayName ?? Component.name;
  return StyledComponent;
};

export type PropsWithCss<T extends ElementType> =
  ComponentPropsWithoutRef<T> & {
    css?: SystemStyleObject;
  };
