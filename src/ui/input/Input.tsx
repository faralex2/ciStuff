import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, id, ...rest }) => {
  const inputId = id || `in_${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className={styles.wrap}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        id={inputId}
        className={[styles.input, error ? styles.error : ""].join(" ")}
        {...rest}
      />
      {error && <span className={styles.hint}>{error}</span>}
    </label>
  );
};
