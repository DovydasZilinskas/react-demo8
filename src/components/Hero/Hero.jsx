import React from "react";
import * as S from "./Hero.style";
import { Section, Button } from "../../components";

function Hero() {
  return (
    <div>
      <S.HeroImg>
        <Section>
          <S.HeroText>
            <h1>Vegan Restaurant Bootstrap</h1>
            <h1>Website Template</h1>
            <h5>
              Integer ac pharetra arcu, nec porttitor uis idleo sagittis cursus.
            </h5>
            <Button>Get free download</Button>
          </S.HeroText>
        </Section>
      </S.HeroImg>
    </div>
  );
}

export default Hero;
