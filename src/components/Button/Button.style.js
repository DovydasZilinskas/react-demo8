import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#555" : "#eee")};
  display: inline-block;
  padding: 0.5em 3em;
  border: 0.16em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${(props) => (props.color === "primary" ? "#ffffff" : "black")};
  text-align: center;
  transition: all 0.15s;
  &:hover {
    color: ${(props) => (props.color === "primary" ? "#dddddd" : "gray")};
    border-color: #dddddd;
  }
  &:active {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }
`;
