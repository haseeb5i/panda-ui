"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { withStyles, PropsWithCss } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";
import { accordion } from "@/styles/recipes";

const classes = accordion();

const Accordion = withStyles(AccordionPrimitive.Root);

const AccordionItem = withStyles(AccordionPrimitive.Item, classes.item);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  PropsWithCss<typeof AccordionPrimitive.Trigger>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={css({ display: "flex" })}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cx(css(cssProp), classes.trigger, className)}
      {...props}
    >
      {children}
      <ChevronDown className={classes.icon} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  PropsWithCss<typeof AccordionPrimitive.Content>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={classes.content} {...props}>
    <div className={cx(css({ pb: "1rem" }, cssProp), className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

export function AccordionDemo() {
  return (
    <Accordion css={{ w: "full" }} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
