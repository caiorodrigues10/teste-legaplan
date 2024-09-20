import styles from "./card.module.scss";
import { CardRootProps } from "./types";

export function Card({
  children,
  className,
  size = "md",
  ...rest
}: CardRootProps) {
  return (
    <div className={`${styles.card} ${styles[size]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
