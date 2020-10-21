import React from "react";
import * as S from "./FoodSection.style";

function FoodSection({ title }) {
  return (
    <S.Section>
      <h3>{title}</h3>
    </S.Section>
  );
}

export default FoodSection;
