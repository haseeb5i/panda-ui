"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";
import { styled } from "@/styles/jsx";
import { css } from "@/styles/css";

const containerStyles = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  "&:has(:disabled)": {
    opacity: 0.5,
  },
});

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(containerStyles, containerClassName)}
    className={cn(css({ _disabled: { cursor: "not-allowed" } }), className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
  },
});

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-zinc-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-zinc-800",
        isActive &&
          "z-10 ring-2 ring-zinc-950 ring-offset-white dark:ring-zinc-300 dark:ring-offset-zinc-950",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-zinc-950 duration-1000 dark:bg-zinc-50" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
