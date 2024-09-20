import styles from "@/components/Button/button.module.scss";
import { ButtonProps } from "./types";

export function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.styleDefault} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
