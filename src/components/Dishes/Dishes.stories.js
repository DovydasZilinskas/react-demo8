import { storiesOf } from "@storybook/react";
import React from "react";
import Dishes from "./Dishes";

storiesOf("Dishes", module).add("Dishes", () => (
  <Dishes
    image="https://s2.15min.lt/images/photos/2013/04/30/big/vistienos-ir-grikiu-kotletai-517f8e601470c.jpg"
    title="Kotletai"
    ingredients="Agurkai, morkos"
    price="10"
  ></Dishes>
));
