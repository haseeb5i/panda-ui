"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { css } from "@/styles/css";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={css({ display: "flex", h: "2rem", m: "8" })}>
      <Button
        onClick={() => {
          setTheme(isDark ? "light" : "dark");
        }}
        css={{ ml: "auto" }}
        variant="outline"
        size="icon"
      >
        <Sun
          className={css({
            size: "1.2rem",
            transition: "transform .15s",
            transform: "rotate(0deg) scale(1)",
            _dark: {
              transform: "rotate(-90deg) scale(0)",
            },
          })}
        />
        <Moon
          className={css({
            position: "absolute",
            size: "1.2rem",
            transition: "transform .15s",
            transform: "rotate(90deg) scale(0)",
            _dark: {
              transform: "rotate(0deg) scale(1)",
            },
          })}
        />
        <span className={css({ srOnly: true })}>Toggle theme</span>
      </Button>
    </div>
  );
}
