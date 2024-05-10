import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  createElement,
  forwardRef,
  useMemo,
} from "react";

import { cx, css } from "@/styles/css";
import { SystemStyleObject } from "@/styles/types";

// TODO: validate its logic and improve
export const withStyles = <T extends ElementType>(
  Component: T,
  styles?: string | SystemStyleObject | [string, SystemStyleObject],
  defaultProps?: { [key: string]: any },
) => {
  const StyledComponent = forwardRef<ElementRef<T>, PropsWithCss<T>>(
    (props, ref) => {
      const { className, css: cssProp, ...restProps } = props;

      let stylesClass = "",
        cssClasses = "";
      if (typeof styles === "string") {
        stylesClass = styles;
        cssClasses = css(cssProp);
      } else if (Array.isArray(styles)) {
        stylesClass = styles[0];
        cssClasses = css(styles[1], cssProp);
      } else {
        cssClasses = css(styles, cssProp);
      }

      const combinedProps = useMemo(
        () => Object.assign({}, defaultProps, restProps),
        [restProps],
      );

      return createElement(Component, {
        ref,
        className: cx(cssClasses, stylesClass, className),
        ...combinedProps,
      });
    },
  );

  // @ts-ignore
  StyledComponent.displayName = Component.displayName;
  return StyledComponent;
};

export type PropsWithCss<T extends ElementType> =
  ComponentPropsWithoutRef<T> & {
    css?: SystemStyleObject;
  };
