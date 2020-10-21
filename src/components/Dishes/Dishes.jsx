import React from "react";
import * as S from "./Dishes.style";

function Dishes({ image, Title, Ingredients, Price }) {
  return (
    <S.DishSection>
      <S.DishImg src={image} />
      <div>
        <h4>{Title}</h4>
        <h5>{Ingredients}</h5>
      </div>
      <h4>${Price}</h4>
    </S.DishSection>
  );
}

export default Dishes;
