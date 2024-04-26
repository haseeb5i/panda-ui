import { cva } from "@/styles/css";
import { styled } from "@/styles/jsx";
import { flex } from "@/styles/patterns";

const badgeVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    rounded: "full",
    borderWidth: "1px",
    paddingX: 2.5,
    paddingY: 0.5,
    textStyle: "xs",
    fontWeight: "semibold",
    transitionProperty: "color, background-color",
    _focus: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
  },
  variants: {
    variant: {
      default: {
        borderColor: "transparent",
        bgColor: "primary",
        color: "primaryForeground",
      },
      secondary: {
        borderColor: "transparent",
        bgColor: "accent",
        color: "accentForeground",
      },
      destructive: {
        borderColor: "transparent",
        bgColor: { base: "red.500", _dark: "red.900" },
        color: "zinc.50",
      },
      outline: {
        color: "foreground",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Badge = styled("div", badgeVariants);

export { Badge, badgeVariants };

export function BadgeDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
