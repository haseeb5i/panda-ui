"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

import { styled } from "@/styles/jsx";

import { css } from "@/styles/css";
import { Button } from "./button";

const Collapsible = styled(CollapsiblePrimitive.Root);

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = styled(CollapsiblePrimitive.CollapsibleContent);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      css={{ w: "350px", spaceY: 2 }}
    >
      <div
        className={css({
          dflex: "center",
          justifyContent: "space-between",
          spaceX: "4",
          px: "4",
        })}
      >
        <h4 className={css({ textStyle: "sm", fontWeight: "semibold" })}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" css={{ w: "9", p: "0" }}>
            <ChevronsUpDown className={css({ size: "4" })} />
            <span className={css({ srOnly: true })}>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className={boxStyles}>@radix-ui/primitives</div>
      <CollapsibleContent css={{ spaceY: 2 }}>
        <div className={boxStyles}>@radix-ui/colors</div>
        <div className={boxStyles}>@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const boxStyles = css({
  rounded: "md",
  borderWidth: "1px",
  px: "4",
  py: "3",
  font: "mono",
  textStyle: "sm",
});
