import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color as inputColor } from "../utils/sources";

const Wrapper = styled.div`
  height: auto;
  width: ${props => `${props.size}rem`};
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  margin-top: 12em;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;

  // check될시 변경점
  ${props =>
    props.checked &&
    `
      border: 1px solid ${inputColor.ocher};
    `}
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px;
      background: ${inputColor.ocher};
    }
  }
  ${props =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: 5px;
        background: ${inputColor.ocher};
      }
    }
  `}
`;

const RadioMessage = styled.div`
  margin-left: 10px;
`;

function InputRadio({ color, children, size, select, onSelect, ...rest }) {
  const handleSelectChange = event => {
    const value = event.target.value;
    onSelect(value);
  };
  return (
    <Wrapper size={size}>
      <Item checked={select === "e-money"}>
        <RadioButton
          type="radio"
          name="radio"
          value="e-money"
          checked={select === "e-money"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <RadioMessage>e-money</RadioMessage>
      </Item>

      <Item checked={select === "e-color"}>
        <RadioButton
          type="radio"
          name="radio"
          value="e-color"
          checked={select === "e-color"}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <RadioMessage>e-color</RadioMessage>
      </Item>
    </Wrapper>
  );
}

export default InputRadio;
