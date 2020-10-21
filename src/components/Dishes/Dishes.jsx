import React from "react";
import * as S from "./Dishes.style";

function Dishes({ image, title, ingredients, price }) {
  return (
    <S.DishSection>
      <S.DishImg src={image} alt={title} />
      <S.TitleDiv>
        <h4>{title}</h4>
        {ingredients}
      </S.TitleDiv>
      <h4>${price / 100}</h4>
    </S.DishSection>
  );
}

export default Dishes;
