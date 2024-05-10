import { withStyles } from "@/lib/with-styles";
import { css } from "@/styles/css";

import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";

const Card = withStyles("div", {
  rounded: "lg",
  borderWidth: "1px",
  bgColor: "background",
  color: "foreground",
  shadow: "sm",
});
Card.displayName = "Card";

const CardHeader = withStyles("div", {
  display: "flex",
  flexDir: "column",
  spaceY: "1.5",
  padding: "6",
});
CardHeader.displayName = "CardHeader";

const CardTitle = withStyles("h3", {
  fontSize: "2xl",
  fontWeight: "semibold",
  lineHeight: "none",
  letterSpacing: "tight",
});
CardTitle.displayName = "CardTitle";

const CardDescription = withStyles("p", {
  textStyle: "sm",
  color: "mutedForeground",
});
CardDescription.displayName = "CardDescription";

const CardContent = withStyles("div", {
  padding: "6",
  paddingTop: "0",
});
CardContent.displayName = "CardContent";

const CardFooter = withStyles("div", {
  display: "flex",
  alignItems: "center",
  padding: "6",
  paddingTop: "0",
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

export const CardDemo = () => (
  <Card css={{ w: "400px" }}>
    <CardHeader>
      <CardTitle>Account</CardTitle>
      <CardDescription>
        Make changes to your account here. Click save when you&apos;re done.
      </CardDescription>
    </CardHeader>
    <CardContent css={{ spaceY: "2" }}>
      <div className={css({ spaceY: "1" })}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className={css({ spaceY: "1" })}>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
);
