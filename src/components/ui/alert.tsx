import { css } from "@/styles/css";
import { styled } from "@/styles/jsx";
import { Terminal } from "lucide-react";

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
        bgColor: "background",
        color: "foreground",
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

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className={css({ size: "4" })} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
