import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./textInput.module.scss";

const TextInputInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, onChange, onBlur, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className}`}
      onBlur={onBlur}
      onChange={onChange}
      {...rest}
    />
  );
});

TextInputInput.displayName = "Input";

export { TextInputInput };
