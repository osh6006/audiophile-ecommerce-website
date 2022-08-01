import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color as inputColor } from "../utils/sources";

const CounterWrapper = styled.div`
  width: 6rem;
  height: 45px;
  display: flex;
  background-color: ${inputColor.lightGray};
  align-items: center;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: darkgray;
  background-color: transparent;

  &:hover {
    color: ${inputColor.ocher};
  }
`;
const CounterPlus = styled(StyledButton)``;
const CounterMinus = styled(StyledButton)``;

function Counter({ children, count, onPlus, onMinus, ...rest }) {
  const handlePlus = event => {
    console.log("plus");
    onPlus();
  };
  const handleMinus = event => {
    console.log("minus");
    onMinus();
  };
  return (
    <CounterWrapper>
      <CounterMinus onClick={handleMinus}>-</CounterMinus>
      <div>{count}</div>
      <CounterPlus onClick={handlePlus}>+</CounterPlus>
    </CounterWrapper>
  );
}

export default Counter;
