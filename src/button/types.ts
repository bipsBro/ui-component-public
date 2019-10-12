export interface ButtonProps {
  type?: "submit" | "button";
  className?: string;
  name?: string;
  buttonType?: "PRIMARY" | "SECONDARY";
  size?: "SMALL" | "DEFAULT" | "LARGE";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
}
