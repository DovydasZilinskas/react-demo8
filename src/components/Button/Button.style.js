import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#555" : "#000")};
  display: inline-block;
  padding: 0.5em 3em;
  border: none;
  box-shadow: inset 0 0 0 1px black, inset 0 0 0 3px black, inset 0 0 0 4px #555;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${(props) => (props.color === "primary" ? "#ffffff" : "#555")};
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
