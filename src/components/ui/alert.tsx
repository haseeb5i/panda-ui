"use client";

import { withStyles } from "@/lib/with-styles";
import { alert } from "@/styles/recipes";

import { css } from "@/styles/css";
import { Terminal } from "lucide-react";

const classes = alert();

const Alert = withStyles("div", classes.root);

const AlertTitle = withStyles("h5", classes.title);

const AlertDescription = withStyles("h5", classes.description);

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
