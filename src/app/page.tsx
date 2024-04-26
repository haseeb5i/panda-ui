import { css } from "@/styles/css";
import { flex, grid } from "@/styles/patterns";
import { Checkbox } from "@/components/ui/checkbox";
import { Button, ButtonDemo } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
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
import { ThemeToggle } from "./theme-toggle";
import { DropdownMenuDemo } from "@/components/ui/dropdown-menu";
import { CollapsibleDemo } from "@/components/ui/collapsible";
import { SelectDemo } from "@/components/ui/select";
import { BreadcrumbDemo } from "@/components/ui/breadcrumb";
import { AccordionDemo } from "@/components/ui/accordion";
import { AlertDemo } from "@/components/ui/alert";
import { AvatarDemo } from "@/components/ui/avatar";
import { BadgeDemo } from "@/components/ui/badge";
import { DialogDemo } from "@/components/ui/dialog";
import { AlertDialogDemo } from "@/components/ui/alert-dialog";
import { PopoverDemo } from "@/components/ui/popover";
import { PaginationDemo } from "@/components/ui/pagination";
import { ScrollAreaDemo } from "@/components/ui/scroll-area";
import { CalendarDemo } from "@/components/ui/calendar";

export default function Home() {
  return (
    <main className="">
      <ThemeToggle />

      <DemoBox title="Accordion">
        <AccordionDemo />
      </DemoBox>

      <DemoBox title="Alert">
        <AlertDemo />
      </DemoBox>

      <DemoBox title="Alert Dialog">
        <AlertDialogDemo />
      </DemoBox>

      <DemoBox title="Avatar">
        <AvatarDemo />
      </DemoBox>

      <DemoBox title="Badge">
        <BadgeDemo />
      </DemoBox>

      <DemoBox title="Breadcrumb">
        <BreadcrumbDemo />
      </DemoBox>

      <DemoBox title="Buttons">
        <ButtonDemo />
      </DemoBox>

      <DemoBox title="Calendar">
        <CalendarDemo />
      </DemoBox>

      <DemoBox title="Checkbox">
        <CheckboxDemo />
      </DemoBox>

      <DemoBox title="Collapsible">
        <CollapsibleDemo />
      </DemoBox>

      <DemoBox title="Dialog">
        <DialogDemo />
      </DemoBox>

      <DemoBox title="Dropdown Menu">
        <DropdownMenuDemo />
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

      <DemoBox title="Scroll Area">
        <ScrollAreaDemo />
      </DemoBox>

      <DemoBox title="Select">
        <SelectDemo />
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

// card, progress, sheet, skeleton, table, form?,

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
