import React from "react";
import styled from "styled-components";

import Title from "../styled/Title";
import InputContainer from "../styled/InputContainer";

const ContainerActivity = styled(InputContainer)`
  & input {
    height: 59px;
    width: 313px;
    box-sizing: border-box;
    border: 3px solid black;
    font-size: 24px;
    text-indent: 10px;
  }
`;

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
