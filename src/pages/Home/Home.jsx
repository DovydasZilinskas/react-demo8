import React, { useEffect, useState } from "react";
import { Section, FoodSection } from "../../components";
import * as S from "./Home.style";

function Home() {
  const [dishes, setDishes] = useState(null);
  const [dishes2, setDishesSoup] = useState(null);

  useEffect(() => {
    fetch("https://testioras.azurewebsites.net/main")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  useEffect(() => {
    fetch("https://testioras.azurewebsites.net/soup")
      .then((res) => res.json())
      .then((data) => setDishesSoup(data));
  }, []);

  return (
    <>
      <Section>
        <h2>Menu</h2>
        <S.FlexBox>
          {dishes && <FoodSection title="Starter" array={dishes} />}
          {dishes2 && <FoodSection title="Soup" array={dishes2} />}
          {dishes && <FoodSection title="Main Course" array={dishes} />}
        </S.FlexBox>
      </Section>
    </>
  );
}

export default Home;
