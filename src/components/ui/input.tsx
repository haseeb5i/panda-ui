import { styled } from "@/styles/jsx";

const Input = styled("input", {
  base: {
    display: "flex",
    height: "10",
    width: "full",
    rounded: "md",
    borderWidth: "1px",
    paddingX: 3,
    paddingY: 2,
    textStyle: "sm",
    bgColor: "background",
    _placeholder: {
      color: 'mutedForeground',
    },
    _file: {
      fontWeight: "medium",
      px: "1.5",
      py: "1px",
      marginEnd: "1",
    },
    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
});

export { Input };
