import styled from "styled-components";

export const DishSection = styled.div`
  display: flex;
  align-items: center;
  line-height: 0;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
  & div {
    margin: 0 10px;
  }
`;

export const DishImg = styled.img`
  border-radius: 50%;
  max-width: 60px;
  max-height: 60px;
  object-fit: cover;
`;
