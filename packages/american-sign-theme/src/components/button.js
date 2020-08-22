import React from "react";
import { styled } from "frontity";

const Button = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background-color: #17a9eb;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`;
