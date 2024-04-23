import { styled } from "@/styles/jsx";

const Alert = styled("div", {
  base: {
    position: "relative",
    width: "full",
    rounded: "lg",
    borderWidth: "1",
    padding: "4",
    "&>svg": {
      position: "absolute",
      left: "4",
      top: "4",
    },
    "&>svg~*": { paddingLeft: "7" },
    "&>svg+div": { translateY: "-3px" },
  },
  variants: {
    variant: {
      default: {
        bgColor: { base: "white", _dark: "zinc.950" },
        color: { base: "zinc.950", _dark: "zinc.50" },
      },
      destructive: {
        color: "red.500",
        borderColor: { base: "red.500/50", _dark: "red.500" },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const AlertTitle = styled("h5", {
  base: {
    marginBottom: "1",
    fontWeight: "medium",
    lineHeight: "none",
    letterSpacing: "tight",
  },
});

const AlertDescription = styled("p", {
  base: {
    textStyle: "sm",
  },
});

export { Alert, AlertTitle, AlertDescription };
