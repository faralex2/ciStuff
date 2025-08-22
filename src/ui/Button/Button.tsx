import React from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  return (
    <button
      className={[styles.btn, styles[variant], styles[size]].join(" ")}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? "Loading…" : children}
    </button>
  );
};
