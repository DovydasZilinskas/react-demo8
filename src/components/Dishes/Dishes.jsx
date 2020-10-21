import React from "react";
import * as S from "./Dishes.style";

function Dishes({ image }) {
  return (
    <S.DishSection>
      <S.DishImg src={image} />
    </S.DishSection>
  );
}

export default Dishes;
