import styled from "styled-components";

export const DishSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
  width: 100%;
  line-height: 1.6;
`;

export const DishImg = styled.img`
  border-radius: 50%;
  max-width: 60px;
  max-height: 60px;
  object-fit: cover;
`;

export const TitleDiv = styled.div`
  margin: 0 5px;
  font-size: 11px;
  & h4 {
    margin: 0;
  }
`;
