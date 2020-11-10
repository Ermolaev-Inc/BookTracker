import React, { useState } from "react";
import s from "../styles/Main.module.sass";
import { Column } from "../components/Column/Column";
import { ColumnElement } from "../components/ColumnElement/ColumnElement";

export const Main = () => {
  // TODO: Getting data from db

  return (
    <div className={s.wrapper}>
      <Column title="Want" textColor="#FF9627">
        <ColumnElement />
        <ColumnElement />
        <ColumnElement />
      </Column>
      <Column title="Bought" textColor="#FF9627">

      </Column>
      <Column title="Reading" textColor="#FF9627">

      </Column>
      <Column title="Had Read" textColor="#FF9627">

      </Column>
    </div>
  );
};