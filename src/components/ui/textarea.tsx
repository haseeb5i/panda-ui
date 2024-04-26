import { styled } from "@/styles/jsx";

const Textarea = styled("textarea", {
  base: {
    display: "flex",
    minHeight: "80px",
    width: "full",
    rounded: "md",
    borderWidth: "1px",
    bgColor: "background",
    paddingX: 3,
    paddingY: 2,
    textStyle: "sm",
    ringOffset: "white",
    _placeholder: {
      color: 'mutedForeground',
    },
    _focus: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
    },
  },
});

export { Textarea };
