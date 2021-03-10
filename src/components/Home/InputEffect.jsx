import React from "react";

import Title from "../styled/Title";
import { InputRadio } from "../styled/Inputs";
import { LabelEffect } from "../styled/Labels";
import { ContainerEffect } from "../styled/Inputs";

const InputEffect = ({ handleEffect }) => {
  return (
    <ContainerEffect>
      <Title>Efecto</Title>
      <InputRadio
        type="radio"
        name="efecto"
        id="positivo"
        onClick={() => handleEffect(true)}
        defaultChecked
      />
      <LabelEffect htmlFor="positivo" className="positivo">
        positivo
      </LabelEffect>

      <InputRadio
        type="radio"
        name="efecto"
        id="negativo"
        onClick={() => handleEffect(false)}
      />
      <LabelEffect htmlFor="negativo" className="negativo">
        negativo
      </LabelEffect>
    </ContainerEffect>
  );
};

export default InputEffect;
