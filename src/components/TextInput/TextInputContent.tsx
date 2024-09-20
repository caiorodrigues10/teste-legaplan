import styles from "./textInput.module.scss";
import { TextInputContentProps } from "./types";

export function TextInputContent({
  children,
  className = "",
}: TextInputContentProps) {
  return <div className={`${styles.inputTheme} ${className}`}>{children}</div>;
}
