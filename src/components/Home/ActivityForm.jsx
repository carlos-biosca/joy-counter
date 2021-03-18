import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { generate as id } from "shortid";

import { ActivityContext } from "../../context/Activity.context";

import InputActivity from "./InputActivity";
import InputEffect from "./InputEffect";
import InputIntensity from "./InputIntensity";

import { SubmitButton } from "../styled/Buttons";

const Message = styled.p`
  color: ${({ theme }) => theme.redcolor};
  font-size: 1.5rem;
`;

const ActivityForm = () => {
  const [name, setName] = useState("");
  const [effect, setEffect] = useState(true);
  const [intensity, setIntensity] = useState(1);
  const [error, setError] = useState("");
  const [activities, setActivities] = useContext(ActivityContext);

  useEffect(() => {
    if (sessionStorage.getItem("list") === null) {
      sessionStorage.setItem("list", JSON.stringify([]));
    } else {
      let saveList = JSON.parse(sessionStorage.getItem("list"));
      setActivities(saveList);
    }
  }, [setActivities]);

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(activities));
  }, [activities]);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleIntensity = e => {
    setIntensity(parseInt(e.target.value));
  };

  const handleValidation = () => {
    setError("");
    let formIsValid = true;

    if (name === "") {
      formIsValid = false;
      setError("*Introduce una actividad");
    }
    if (name !== "" && !name.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/)) {
      formIsValid = false;
      setError("*Introduce solo letras");
    }

    return formIsValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      setActivities([...activities, { id: id(), name, effect, intensity }]);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputActivity name={name} handleName={handleName} />
      <InputEffect effect={effect} handleEffect={setEffect} />
      <InputIntensity intensity={intensity} handleIntensity={handleIntensity} />
      <SubmitButton type="submit" value="Añadir" />
      <Message>{error}</Message>
    </form>
  );
};

export default ActivityForm;
