import styled from "styled-components";
import { ColumnTypes } from "./ColumnProps";

export const ColumnWrapper = styled.div<ColumnTypes>`
  display: grid;
  grid-template-rows: 10.1823708% 89.8176292%;
  justify-items: center;
  width: 23.0902778%;
  height: 95%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`;

export const Children = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;