import styles from "@/components/Button/button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: ReactNode;
}

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
