import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const Actions = styled.nav`
  background-color: green;
  border-bottom: 1px solid #fff;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  &:hover {
    color: #000;
    transition: 1s;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
