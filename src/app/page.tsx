import { css } from "@/styles/css";
import { flex } from "@/styles/patterns";
import { Checkbox } from "@/components/ui/checkbox";
import { ButtonDemo } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTPDemo } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { RadioGroupDemo } from "@/components/ui/radio-group";
import { SeparatorDemo } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipDemo } from "@/components/ui/tooltip";
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
import { CardDemo } from "@/components/ui/card";
import { ProgressDemo } from "@/components/ui/progress";
import { SkeletonDemo } from "@/components/ui/skeleton";

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

      <DemoBox title="Card">
        <CardDemo />
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

      <DemoBox title="Progress">
        <ProgressDemo />
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

      <DemoBox title="Skeleton">
        <SkeletonDemo />
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

// sheet, table, form?,

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
