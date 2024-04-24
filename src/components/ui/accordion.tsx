"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { css, cx } from "@/styles/css";
import { styled, HTMLStyledProps } from "@/styles/jsx";

const Accordion = styled(AccordionPrimitive.Root);

const AccordionItem = styled(AccordionPrimitive.Item, {
  base: {
    borderBottomWidth: "1px",
  },
});

const triggerStyles = css.raw({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  paddingY: "1rem",
  fontWeight: "500",
  transition: "all 200ms",
  cursor: "pointer",
  _hover: {
    textDecoration: "underline",
  },
  "&[data-state=open] > svg": {
    transform: "rotate(180deg)",
  },
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  HTMLStyledProps<typeof AccordionPrimitive.Trigger>
>(({ children, css: cssProp, ...props }, ref) => (
  <AccordionPrimitive.Header className={css({ display: "flex" })}>
    <AccordionPrimitive.Trigger
      ref={ref}
      {...props}
      className={cx(css(triggerStyles, cssProp), props.className)}
    >
      {children}
      <ChevronDown
        className={css({
          transition: "transform 200ms",
          size: "1rem",
          flexShrink: 0,
        })}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const contentStyles = css({
  overflow: "hidden",
  fontSize: "sm",
  lineHeight: "snug",
  transition: "all 200ms",
  _open: {
    animation: "accordionDown 0.2s ease-out",
  },
  _closed: {
    animation: "accordionUp 0.2s ease-out",
  },
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  HTMLStyledProps<typeof AccordionPrimitive.Content>
>(({ css: cssProp, className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={contentStyles} {...props}>
    <div className={cx(css({ pb: "1rem" }, cssProp), className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
