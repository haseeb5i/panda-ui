import { css } from "@/styles/css";
import { styled } from "@/styles/jsx";
import { skeleton } from "@/styles/recipes";

const Skeleton = styled("div", skeleton);

export { Skeleton };

export function SkeletonDemo() {
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "4" })}>
      <Skeleton css={{ size: "12", rounded: "full" }} />
      <div className={css({ spaceY: "2" })}>
        <Skeleton css={{ h: "4", w: "250px" }} />
        <Skeleton css={{ h: "4", w: "200px" }} />
      </div>
    </div>
  );
}
