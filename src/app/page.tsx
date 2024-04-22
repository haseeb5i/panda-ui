import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { css } from "@/styles/css";
import { flex } from "@/styles/patterns";

export default function Home() {
  return (
    <main className="">
      <DemoBox title="Accordion">
        <AccordionDemo />
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
