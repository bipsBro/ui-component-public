import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from "./index";

storiesOf("Button", module)
  .add("default", () => (
    <Component onClick={action("clicked")}>Click me</Component>
  ))
  .add("Primary", () => (
    <Component onClick={action("clicked")}>Click me</Component>
  ))
  .add("disabled", () => (
    <Component onClick={action("clicked")} disabled>
      Click me
    </Component>
  ))
  .add("Secondary", () => (
    <Component onClick={action("clicked")} buttonType="SECONDARY">
      Click me
    </Component>
  ))
  .add("Primary large", () => (
    <Component onClick={action("clicked")} size="LARGE">
      Click me
    </Component>
  ))
  .add("Secondary Large", () => (
    <Component onClick={action("clicked")} size="LARGE" buttonType="SECONDARY">
      Click me
    </Component>
  ))
  .add("Primary small", () => (
    <Component onClick={action("clicked")} size="SMALL">
      Click me
    </Component>
  ))
  .add("Secondary small", () => (
    <Component onClick={action("clicked")} size="SMALL" buttonType="SECONDARY">
      Click me
    </Component>
  ));
