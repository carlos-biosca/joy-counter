import React from "react";
import styled from "styled-components";

import Title from "../styled/Title";
import InputRadio from "../styled/InputRadio";
import InputLabel from "../styled/InputLabel";
import InputContainer from "../styled/InputContainer";

const ContainerIntensity = styled(InputContainer)`
  margin-bottom: 62px;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const LabelIntensity = styled(InputLabel)`
  width: 40px;
  height: 46px;
  font-weight: bold;
  line-height: 49px;
`;

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
