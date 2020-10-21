import { storiesOf } from "@storybook/react";
import React from "react";
import Dishes from "./Dishes";
import StoryRouter from "storybook-react-router";

storiesOf("Dishes", module)
  .addDecorator(StoryRouter())
  .add("Dishes", () => <Dishes />);
