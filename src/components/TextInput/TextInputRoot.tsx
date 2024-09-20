import styles from "./textInput.module.scss";
import { TextInputRootProps } from "./types";

export function TextInputRoot({
  children,
  className = "",
}: TextInputRootProps) {
  return (
    <div className={`${styles.textInputRoot} ${className}`}>{children}</div>
  );
}
