import styles from "./checkbox.module.scss";
import { CheckboxProps } from "./types";

export function Checkbox({ id, label, ...rest }: CheckboxProps) {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        className={styles.customCheckbox}
        {...rest}
      />
      <label htmlFor={id} className={styles.checkboxLabel} />
      <span className={styles.checkboxText}>{label}</span>
    </div>
  );
}
