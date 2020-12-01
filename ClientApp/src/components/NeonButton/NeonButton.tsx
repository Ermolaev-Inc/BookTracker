import React from "react";
import styled from "styled-components";
import { NeonButtonTypes, NeonButtonProps } from "./NeonButtonProps";

const Button = styled.div<NeonButtonTypes>`
  font-family: "Roboto", sans-serif;
  font-weight: ${props => props.fontWeight};
  display: inline-block;
  border: 0;
  border-radius: 10px;
  color: ${props => props.neonColor};
  text-decoration: none;
  font-size: ${props => props.fontSize};
  overflow: hidden;
  transition: 0.2s;
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    background: ${props => props.neonColor};
    box-shadow: 0 0 10px ${props => props.neonColor}, 0 0 40px ${props => props.neonColor}, 0 0 80px ${props => props.neonColor};
    color: ${props => props.neonTextColor};
  }
  `;

export const NeonButton: React.FC<NeonButtonProps> = ({
  title = "OK",
  fontFamily = "Roboto",
  fontWeight = 500,
  fontSize = "24px",
  neonTextColor = "#ffffff",
  neonColor = "#79C7FF",
  ...props
}) => {

  return (
    <Button fontFamily={fontFamily} fontWeight={fontWeight} fontSize={fontSize} neonTextColor={neonTextColor} neonColor={neonColor} {...props} >
      { title }
    </Button>
  );
};