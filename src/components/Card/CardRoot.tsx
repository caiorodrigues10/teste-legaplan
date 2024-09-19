import { HTMLAttributes, ReactNode } from "react";
import styles from "./card.module.scss";

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardRoot({ children, className, ...rest }: CardRootProps) {
  return (
    <div className={`${styles.cardRoot} ${className}`} {...rest}>
      {children}
    </div>
  );
}
