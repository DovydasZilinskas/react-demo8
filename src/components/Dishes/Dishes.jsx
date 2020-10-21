import React from "react";
import * as S from "./Dishes.style";

function Dishes({ image, title, ingredients, price }) {
  return (
    <S.DishSection>
      <S.DishImg src={image} />
      <S.TitleDiv>
        <h4>{title}</h4>
        <h5>{ingredients}</h5>
      </S.TitleDiv>
      <h4>${price}</h4>
    </S.DishSection>
  );
}

export default Dishes;
