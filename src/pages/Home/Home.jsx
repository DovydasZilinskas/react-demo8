import React, { useEffect, useState } from "react";
import { Section, FoodSection } from "../../components";
import * as S from "./Home.style";

function Home() {
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    fetch("https://testioras.azurewebsites.net/main")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  return (
    <>
      <Section>
        <h2>Menu</h2>
        <S.FlexBox>
          {dishes && <FoodSection title="Starter" array={dishes} />}
        </S.FlexBox>
      </Section>
    </>
  );
}

export default Home;
