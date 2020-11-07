import React from "react";
import styled from "styled-components";
import { InputTypes, InputProps } from "./InputProps";

const InputStyles = styled.input<InputTypes>`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 24px;
  border-bottom-color: ${props => props.borderBottomColor};
  border-bottom-width: 4px;
  border-right-width: 0;
  border-left-width: 0;
  border-top-width: 0;
  outline: none;
  &:focus {
    border-bottom-color: ${props => props.borderBottomColorFocus};
  }
  ::placeholder {
    color: ${props => props.borderBottomColor};
  }
`;

export const Input: React.FC<InputProps> = ({
  className = "",
  type = "text",
  placeholder = "Login",
  fontWeight = 500,
  fontSize = "24px",
  borderBottomColor = "#e6e6e6",
  borderBottomColorFocus = "#ff9627",
  ...props
}) => {

  return (
    <div className={className} {...props}>
      <InputStyles type={type} placeholder={placeholder} fontWeight={fontWeight} fontSize={fontSize} borderBottomColor={borderBottomColor} borderBottomColorFocus={borderBottomColorFocus} />
    </div>
  );
};

