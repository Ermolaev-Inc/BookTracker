import React from "react";
import styled from "styled-components";

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 91.353383459%;
  color: #000000;
  margin-bottom: 6px;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0 0 4px 0 rgba(211, 211, 211, 0.53);
  }
`;

export const ColumnElement = () => {
  return (
    <Element>
      <span style={ { fontWeight: 500, paddingTop: "8px" } }>Clean Code</span>
      <span style={ { fontWeight: 400, paddingBottom: "8px" } }>Robert Martin</span>
    </Element>
  );
};