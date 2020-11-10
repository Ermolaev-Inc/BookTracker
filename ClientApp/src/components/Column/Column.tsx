import React from "react";
import { ColumnProps } from "./ColumnProps";
import { ColumnWrapper, Children } from "./ColumnStyles";

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
      <Children>{children}</Children>
    </ColumnWrapper>
  );
};