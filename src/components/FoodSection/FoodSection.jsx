import React from "react";
import * as S from "./FoodSection.style";
import { Dishes } from "../";

function FoodSection({ title, array }) {
  return (
    <S.Section>
      <h3>{title}</h3>
      {array.map((dishes) => (
        <Dishes
          key={dishes.id}
          title={dishes.title}
          ingredients={dishes.ingredients}
          price={dishes.price}
          image={dishes.image}
        />
      ))}
    </S.Section>
  );
}

export default FoodSection;
