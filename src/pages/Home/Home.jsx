import React from "react";
import { Section, FoodSection } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <>
      <Section>
        <h2>Menu</h2>
        <S.FlexBox>
          <FoodSection title="Starter"></FoodSection>
          <FoodSection title="Soup"></FoodSection>
          <FoodSection title="Main Course"></FoodSection>
        </S.FlexBox>
      </Section>
    </>
  );
}

export default Home;
