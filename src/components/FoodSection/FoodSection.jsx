import React from "react";
import * as S from "./FoodSection.style";
import { Dishes } from "../";

function FoodSection({ title, array }) {
  return (
    <S.Section>
      <ul>
        <h3>{title}</h3>
        {array.map((dishes) => (
          <Dishes
            key={dishes.id}
            title={dishes.title}
            ingredients={dishes.ingredients}
            price={dishes.price / 100}
            image={dishes.image}
          />
        ))}
      </ul>
    </S.Section>
  );
}

export default FoodSection;
