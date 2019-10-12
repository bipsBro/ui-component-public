export interface ButtonProps {
  type?: "submit" | "button";
  className?: string;
  name?: string;
  buttonType?: "PRIMARY" | "SECONDARY";
  size?: "SMALL" | "DEFAULT" | "LARGE";
  fullWidth?: boolean;
  disabled?: boolean;
  onMouseDown?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void> | void;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void> | void;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  style?: React.CSSProperties | {};
}
