import { Text, type TextProps } from "./text";

export const Heading = ({ css: cssProp, ...props }: TextProps<"h1">) => (
  <Text
    as="h2"
    css={{
      textStyle: "2xl",
      fontWeight: "semibold",
      ...cssProp,
    }}
    {...props}
  />
);
