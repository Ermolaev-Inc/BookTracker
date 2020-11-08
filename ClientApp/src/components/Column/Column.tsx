import React from "react";
import styled from "styled-components";
import { ColumnTypes, ColumnProps } from "./ColumnProps";

const ColumnWrapper = styled.div<ColumnTypes>`
  display: grid;
  grid-template-rows: 10.1823708% 89.8176292%;
  justify-items: center;
  width: 23.0902778%;
  height: 95%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`;

export const Column: React.FC<ColumnProps> = ({
  title = "Column",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  children,
  ...props
}) => {
  return (
    <ColumnWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      <div>{title}</div>
      <div>{children}</div>
    </ColumnWrapper>
  );
};