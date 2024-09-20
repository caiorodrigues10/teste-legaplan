import styles from "./textInput.module.scss";
import { TextInputErrorProps } from "./types";

export function TextInputError({
  isInvalid,
  description,
}: TextInputErrorProps) {
  if (!isInvalid) {
    return null;
  }

  return <span className={styles.textInputError}>{description}</span>;
}
