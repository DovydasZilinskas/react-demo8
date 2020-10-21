import styled from "styled-components";
import Image from "../../assets/header.png";

export const HeroImg = styled.div`
  background-image: url(${Image});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const HeroText = styled.div`
  padding-top: 150px;
  line-height: 0.5;
`;
