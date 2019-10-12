import React from "react";
import { styled } from "theme/index";
import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  height: ${({ size }) =>
    size === "LARGE" ? 3 : size === "DEFAULT" ? 2 : 1.8}rem;
  line-height: 150%;
  font-size: ${({ size }) =>
    size === "LARGE" ? 1.5 : size === "DEFAULT" ? 1 : 0.9}rem;
  font-weight: 700;
  border-radius: 10rem;
  background-color: ${({ theme, buttonType }) =>
    buttonType === "PRIMARY" ? theme.colors.red : theme.colors.white};
  color: ${({ theme, buttonType }) =>
    buttonType === "SECONDARY" ? theme.colors.red : theme.colors.white};
  padding: 0 25px;
  transition: all 0.25s ease;
  margin: 0.8rem 0;
  cursor: pointer;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightGray};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:enabled,
  &:active:enabled {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.7);
    opacity: 0.9;
  }

  ${({ fullWidth }) => (fullWidth ? "width: 100%" : "")};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth,
  size,
  type,
  // You can define default value in here too
  buttonType = "PRIMARY",
  name,
  disabled,
  onClick
}) => {
  return (
    <StyledButton
      className={className}
      name={name}
      size={size}
      buttonType={buttonType}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

// default props of button
Button.defaultProps = {
  buttonType: "PRIMARY",
  size: "DEFAULT",
  type: "button"
};

export default Button;
