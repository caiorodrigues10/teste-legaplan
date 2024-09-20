import { HTMLAttributes } from "react";

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export type { CardRootProps };
