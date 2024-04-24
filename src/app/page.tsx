import { ChevronRight, Mail, Terminal } from "lucide-react";

import { css } from "@/styles/css";
import { flex, grid } from "@/styles/patterns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="">
      <DemoBox title="Accordion">
        <AccordionDemo />
      </DemoBox>

      <DemoBox title="Alert">
        <AlertDemo />
      </DemoBox>

      <DemoBox title="Avatar">
        <AvatarDemo />
      </DemoBox>

      <DemoBox title="Badge">
        <BadgeDemo />
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

      <DemoBox title="Input OTP">
        <InputOTPDemo />
      </DemoBox>

      <DemoBox title="Pagination">
        <PaginationDemo />
      </DemoBox>

      <DemoBox title="Popover">
        <PopoverDemo />
      </DemoBox>

      <DemoBox title="Radio Group">
        <RadioGroupDemo />
      </DemoBox>

      <DemoBox title="Separator">
        <SeparatorDemo />
      </DemoBox>

      <DemoBox title="Slider">
        <SliderDemo />
      </DemoBox>

      <DemoBox title="Switch">
        <SwitchDemo />
      </DemoBox>

      <DemoBox title="Tabs">
        <TabsDemo />
      </DemoBox>

      <DemoBox title="Tooltip">
        <TooltipDemo />
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

function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
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

function BadgeDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
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
              css={{ gridColumn: "3" }}
            />
          </div>
          <div className={grid({ columns: 4, gap: "4", alignItems: "center" })}>
            <Label htmlFor="username" css={{ textAlign: "right" }}>
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              css={{ gridColumn: "3" }}
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

function InputOTPDemo() {
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

const PopoverInput = ({
  id,
  label,
  defaultValue,
}: {
  id: string;
  label: string;
  defaultValue: string;
}) => (
  <div className={grid({ columns: 3, gap: "4", alignItems: "center" })}>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      defaultValue={defaultValue}
      className={css({ h: "8", gridColumn: "2" })}
    />
  </div>
);

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "80" }}>
        <div className={css({ spaceY: "2", mb: "4" })}>
          <h4 className={css({ fontWeight: "medium", lineHeight: "none" })}>
            Dimensions
          </h4>
          <p className={css({ textStyle: "sm", color: "zinc.500" })}>
            Set the dimensions for the layer.
          </p>
        </div>
        <div className={grid({ gap: "2" })}>
          <PopoverInput id="width" label="Width" defaultValue="100%" />
          <PopoverInput id="maxWidth" label="Max. width" defaultValue="300px" />
          <PopoverInput id="height" label="Height" defaultValue="25px" />
          <PopoverInput
            id="maxHeight"
            label="Max. height"
            defaultValue="none"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className={flex({ align: "center", spaceX: "2" })}>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="account" css={{ w: "400px" }}>
      <TabsList css={{ display: "grid", w: "full", gridTemplateColumns: "2" }}>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>tab 1</div>
      </TabsContent>
      <TabsContent value="password">
        <div>tab 2</div>
      </TabsContent>
    </Tabs>
  );
}

function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} css={{ w: "60%" }} />;
}

function SeparatorDemo() {
  return (
    <div>
      <div className={css({ spaceY: "1" })}>
        <h4
          className={css({
            textStyle: "sm",
            fontWeight: "medium",
            lineHeight: "none",
          })}
        >
          Radix Primitives
        </h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator css={{ my: "4" }} />
      <div
        className={flex({
          align: "center",
          h: "5",
          spaceX: "4",
          textStyle: "sm",
        })}
      >
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
