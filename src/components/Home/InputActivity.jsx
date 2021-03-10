import React from "react";

import Title from "../styled/Title";
import { ContainerActivity } from "../styled/Inputs";

const InputActivity = ({ name, handleName }) => {
  return (
    <ContainerActivity>
      <Title>Nombre actividad</Title>
      <input
        type="text"
        name="actividad"
        id="actividad"
        value={name}
        onChange={handleName}
      />
    </ContainerActivity>
  );
};

export default InputActivity;
