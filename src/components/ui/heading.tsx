import { forwardRef } from "react";
import { Text, type TextProps } from "./text";

interface HeadingProps extends TextProps<React.ElementType> {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => (
    <Text as="h2" weight="semibold" size="2xl" ref={ref} {...props} />
  ),
);

Heading.displayName = "Heading";
