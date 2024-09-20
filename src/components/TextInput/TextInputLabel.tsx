import styles from "./textInput.module.scss";
import { TextInputLabelProps } from "./types";

export function TextInputLabel({
  description,
  children,
  className = "",
}: TextInputLabelProps) {
  return (
    <label className={`${styles.textInputLabel} ${className}`}>
      <p>{description}</p>
      {children}
    </label>
  );
}
