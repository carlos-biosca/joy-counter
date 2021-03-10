import React from "react";

import Title from "../styled/Title";
import { InputRadio } from "../styled/Inputs";
import { LabelIntensity } from "../styled/Labels";
import { ContainerIntensity } from "../styled/Inputs";

const InputIntensity = ({ intensity, handleIntensity }) => {
  return (
    <ContainerIntensity>
      <Title>Intensidad</Title>
      <div onChange={handleIntensity}>
        <InputRadio
          type="radio"
          name="intensidad"
          id="1"
          value={1}
          defaultChecked
        />
        <LabelIntensity htmlFor="1">1</LabelIntensity>
        <InputRadio type="radio" name="intensidad" id="2" value={2} />
        <LabelIntensity htmlFor="2">2</LabelIntensity>
        <InputRadio type="radio" name="intensidad" id="3" value={3} />
        <LabelIntensity htmlFor="3">3</LabelIntensity>
        <InputRadio type="radio" name="intensidad" id="4" value={4} />
        <LabelIntensity htmlFor="4">4</LabelIntensity>
        <InputRadio type="radio" name="intensidad" id="5" value={5} />
        <LabelIntensity htmlFor="5">5</LabelIntensity>
      </div>
    </ContainerIntensity>
  );
};

export default InputIntensity;
