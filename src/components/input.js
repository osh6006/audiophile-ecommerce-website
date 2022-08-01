import React from "react";
import styled, { css } from "styled-components";
import { color as inputColor } from "../utils/sources";
import { size as inputSize } from "../utils/sources";
import { weight as inputWeight } from "../utils/sources";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: white;
      border: 0.5px solid ${selected};
      ::placeholder {
        color: ${selected};
      }

      &:hover {
        outline: none;
        border-color: ${inputColor.ocher};
      }
      &:focus {
        outline: none;
        border-color: ${inputColor.ocher};
        caret-color: ${inputColor.ocher};
      }
    `;
  }}
`;

const StyledInput = styled.input`
  width: 12rem;
  font-size: 15px;
  padding: 15px 15px;
  font-weight: 700;
  border-radius: 5px;

  ${colorStyles}
`;

const InputWrapper = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`;

const InputLabel = styled.span`
  font-size: ${inputSize.subTitle};
  font-weight: ${inputWeight.bold};
  color: ${inputColor.black};
  margin-bottom: 0.5rem;
`;

function Input({ color, ...rest }) {
  // onchange 함수 받기
  return (
    <InputWrapper>
      <InputLabel>Name</InputLabel>
      <StyledInput color={color} {...rest} />
    </InputWrapper>
  );
}

export default Input;
