import { styled } from "@/styles/jsx";
import { badge } from "@/styles/recipes";
import { flex } from "@/styles/patterns";

const Badge = styled("div", badge);

export function BadgeDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
