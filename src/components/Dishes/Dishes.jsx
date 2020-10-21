import React from "react";
import * as S from "./Dishes.style";

function Dishes({ image, title, ingredients, price }) {
  return (
    <S.DishSection>
      <S.DishImg src={image} />
      <S.TitleDiv>
        <div>{title}</div>
        {ingredients}
      </S.TitleDiv>
      <h4>${price}</h4>
    </S.DishSection>
  );
}

export default Dishes;
