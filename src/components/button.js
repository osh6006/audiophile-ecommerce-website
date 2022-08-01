import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${props =>
        props.outline &&
        css`
          color: black;
          font-weight: 500;
          background: none;
          border: 1px solid black;
          &:hover {
            background: black;
            color: white;
          }
        `}
      ${props =>
        props.empty &&
        css`
          color: ${selected};
          font-weight: 500;
          background: none;
          border: none;
          &:hover {
            background: none;
            color: #d87d4a;
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  ${props =>
    props.size === "large" &&
    css`
      height: 4rem;
      font-size: 1.2rem;
    `}

  ${props =>
    props.size === "medium" &&
    css`
      height: 3.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    `}

    ${props =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.25rem;
  font-weight: 500;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, outline, empty, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      empty={empty}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
