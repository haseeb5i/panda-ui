"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { css, cx } from "@/styles/css";
import { styled } from "@/styles/jsx";

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
    containerClassName={cx(containerStyles, containerClassName)}
    className={cx(css({ _disabled: { cursor: "not-allowed" } }), className)}
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

const slotStyles = css({
  position: "relative",
  size: "10",
  dflex: "center",
  borderYWidth: "1px",
  borderRightWidth: "1px",
  textStyle: "sm",
  _first: {
    roundedLeft: "md",
    borderLeftWidth: "1px",
  },
  _last: {
    roundedRight: "md",
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
      className={cx(
        slotStyles,
        isActive && css({ zIndex: 10, boxShadow: "outline" }),
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div
          className={css({
            position: "absolute",
            inset: 0,
            dflex: "center",
            pointerEvents: "none",
          })}
        >
          <div
            className={css({
              height: "4",
              width: "1px",
              bgColor: "foreground",
              animation: "caret-blink",
            })}
          />
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

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}