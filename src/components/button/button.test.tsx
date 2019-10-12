import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./";
import { ButtonProps } from "./types";
import TestThemeProvider from "../../utils/TestThemeProvider";

const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <TestThemeProvider>
    <Component {...props} />
  </TestThemeProvider>
);

describe("Button functions", () => {
  let count = 0;
  const handleFunction = () => {
    count++;
  };
  it("should click the button", () => {
    const { getByText } = render(
      <Button onClick={handleFunction}>save</Button>
    );
    fireEvent.click(getByText("save"));
    expect(count).toBe(1);
  });

  it("should handle button onMouseEnter event", () => {
    const { getByText } = render(
      <Button onMouseEnter={handleFunction}>save</Button>
    );
    fireEvent.mouseEnter(getByText("save"));
    expect(count).toBe(2);
  });

  it("should handle button onMouseLeave event", () => {
    const { getByText } = render(
      <Button onMouseLeave={handleFunction}>save</Button>
    );
    fireEvent.mouseLeave(getByText("save"));
    expect(count).toBe(3);
  });
});

describe("Button props", () => {
  it("should render with default props", () => {
    const { getByText } = render(<Button>Default Button</Button>);
    const button = getByText("Default Button");
    expect(button).toHaveProperty("type", "button");
    expect(button).toHaveTextContent("Default Button");
  });

  it("should render with className and submit type props", () => {
    const { getByText } = render(
      <Button className="custom-class" type="submit">
        Submit Button
      </Button>
    );
    const button = getByText("Submit Button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveProperty("type", "submit");
  });

  it("should render name and disabled props", () => {
    const { getByText, container } = render(
      <Button name="test-name" disabled>
        Disabled Button
      </Button>
    );
    const button = getByText("Disabled Button");
    expect(button).toHaveProperty("name", "test-name");
    expect(button).toBeDisabled();
  });

  it("should have style props", () => {
    const { container } = render(
      <Button style={{ background: "red" }}>Styled Button</Button>
    );
    const wrapperOfButton = container.children.item(0) as HTMLElement;
    expect(wrapperOfButton).toHaveStyle("background: red");
  });
});
