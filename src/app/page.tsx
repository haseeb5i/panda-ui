import { ChevronRight, Mail, Terminal } from "lucide-react";

import { css } from "@/styles/css";
import { flex, grid } from "@/styles/patterns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="">
      <DemoBox title="Accordion">
        <AccordionDemo />
      </DemoBox>
      <DemoBox title="Alert">
        <AlertDemo />
      </DemoBox>

      <DemoBox title="Buttons">
        <ButtonDemo />
      </DemoBox>

      <DemoBox title="Checkbox">
        <CheckboxDemo />
      </DemoBox>

      <DemoBox title="Dialog">
        <DialogDemo />
      </DemoBox>

      <DemoBox title="Input">
        <InputDemo />
      </DemoBox>

      <DemoBox title="Switch">
        <SwitchDemo />
      </DemoBox>
    </main>
  );
}

function DemoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={css({ maxW: "900px", mx: "auto" })}>
      <h3 className={css({ fontSize: "2xl", fontWeight: "600", pl: "10" })}>
        {title}
      </h3>
      <div
        className={flex({
          justify: "center",
          align: "center",
          width: "full",
          padding: 10,
          pt: 3,
        })}
      >
        {children}
      </div>
    </div>
  );
}

function AccordionDemo() {
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

function AlertDemo() {
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

function ButtonDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button>
        <Mail className={css({ size: "4", mr: "2" })} />
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      <Button variant="outline" size="icon">
        <ChevronRight className={css({ size: "4" })} />
      </Button>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div className={flex({ align: "center", spaceX: "2" })}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

function SwitchDemo() {
  return (
    <div className={flex({ align: "center", spaceX: "2" })}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent css={{ maxW: { sm: "425px" } }}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className={css({ spaceY: "4", py: "4" })}>
          <div className={grid({ columns: 4, gap: "4", alignItems: "center" })}>
            <Label htmlFor="name" css={{ textAlign: "right" }}>
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              css={{ gridColumn: '3' }}
            />
          </div>
          <div className={grid({ columns: 4, gap: "4", alignItems: "center" })}>
            <Label htmlFor="username" css={{ textAlign: "right" }}>
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              css={{ gridColumn: '3' }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function InputDemo() {
  return (
    <div className={flex({ spaceY: "4", flexDir: "column" })}>
      <Input type="email" placeholder="Email" />
      <Input disabled type="email" placeholder="Email" />
      <Input id="picture" type="file" />
    </div>
  );
}
