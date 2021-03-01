import React, { useState } from "react";

import styled from "styled-components";

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 11px;
`;

const InputContainer = styled.div`
  width: 313px;
  margin: 0 auto;
  text-align: left;
`;

const InputRadio = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;

  &:checked + label {
    box-shadow: none;
    background-color: ${({ theme }) => theme.blackcolor};
    color: ${({ theme }) => theme.whitecolor};
  }

  &:focus + label {
    color: ${({ theme }) => theme.redcolor};
    background-color: ${({ theme }) => theme.blackcolor};
  }
`;

const InputLabel = styled.label`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 24px;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.redcolor};
  }

  &:active {
    transform: scale(0.9);
  }
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

const LabelIntensity = styled(InputLabel)`
  width: 40px;
  height: 46px;
  font-weight: bold;
  line-height: 49px;
`;

const InputActivity = styled(InputContainer)`
  & input {
    height: 59px;
    width: 313px;
    box-sizing: border-box;
    border: 3px solid black;
    font-size: 24px;
    text-indent: 10px;
  }
`;

const InputEffect = styled(InputContainer)`
  margin-bottom: 13px;
`;

const InputIntensity = styled(InputContainer)`
  margin-bottom: 62px;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const SubmitButton = styled.input`
  width: 172px;
  height: 67px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  border: none;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.blackcolor};
    color: ${({ theme }) => theme.whitecolor};
  }

  &:focus {
    background-color: ${({ theme }) => theme.blackcolor};
    color: ${({ theme }) => theme.whitecolor};
  }

  &:active {
    transform: scale(0.9);
    color: ${({ theme }) => theme.redcolor};
  }
`;

const ActivityForm = () => {
  const [name, setName] = useState("");
  const [effect, setEffect] = useState();
  const [intensity, setIntensity] = useState();
  const [activities, setActivities] = useState([]);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleIntensity = e => {
    setIntensity(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setActivities([...activities, { name, effect, intensity }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputActivity>
        <Title>Nombre actividad</Title>
        <input
          type="text"
          name="actividad"
          id="actividad"
          value={name}
          onChange={handleName}
        />
      </InputActivity>

      <InputEffect>
        <Title>Efecto</Title>
        <InputRadio
          type="radio"
          name="efecto"
          id="positivo"
          onClick={() => setEffect(true)}
          defaultChecked
        />
        <LabelEffect htmlFor="positivo" className="positivo">
          positivo
        </LabelEffect>

        <InputRadio
          type="radio"
          name="efecto"
          id="negativo"
          onClick={() => setEffect(false)}
        />
        <LabelEffect htmlFor="negativo" className="negativo">
          negativo
        </LabelEffect>
      </InputEffect>

      <InputIntensity>
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
      </InputIntensity>

      <SubmitButton type="submit" value="Añadir" />
    </form>
  );
};

export default ActivityForm;
