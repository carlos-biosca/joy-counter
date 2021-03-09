import React from "react";
import styled from "styled-components";

import Title from "../styled/Title";
import InputRadio from "../styled/InputRadio";
import InputLabel from "../styled/InputLabel";
import InputContainer from "../styled/InputContainer";

const ContainerEffect = styled(InputContainer)`
  margin-bottom: 13px;
`;

const LabelEffect = styled(InputLabel)`
  display: inline-block;
  width: 150px;
  height: 59px;
  line-height: 58px;
  outline: none;

  &.positivo {
    margin-right: 13px;
    border-radius: 10px 0px 0px 10px;
  }

  &.negativo {
    border-radius: 0px 10px 10px 0px;
  }
`;

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
