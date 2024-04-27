import { css } from "@/styles/css";
import { styled } from "@/styles/jsx";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";

const Card = styled("div", {
  base: {
    rounded: "lg",
    borderWidth: "1px",
    bgColor: "background",
    color: "foreground",
    shadow: "sm",
  },
});
Card.displayName = "Card";

const CardHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    spaceY: "1.5",
    padding: "6",
  },
});
CardHeader.displayName = "CardHeader";

const CardTitle = styled("h3", {
  base: {
    fontSize: "2xl",
    fontWeight: "semibold",
    lineHeight: "none",
    letterSpacing: "tight",
  },
});
CardTitle.displayName = "CardTitle";

const CardDescription = styled("p", {
  base: {
    textStyle: "sm",
    color: "mutedForeground",
  },
});
CardDescription.displayName = "CardDescription";

const CardContent = styled("div", {
  base: {
    padding: "6",
    paddingTop: "0",
  },
});
CardContent.displayName = "CardContent";

const CardFooter = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    padding: "6",
    paddingTop: "0",
  },
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
  <Card css={{w: '400px'}}>
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
