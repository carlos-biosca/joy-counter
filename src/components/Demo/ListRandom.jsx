import React, { useContext, useState } from "react";

import { ActivityContext } from "../../context/Activity.context";

import { SubmitButton } from "../styled/Buttons";

const ListRandom = () => {
  const [activities, setActivities] = useContext(ActivityContext); // eslint-disable-line
  const [words] = useState([
    "dieta",
    "dormir",
    "actividad física",
    "estrés",
    "leer libros",
    "contacto social",
    "trabajo",
    "preocupaciones",
    "fumar",
    "pasar tiempo solo",
    "beber alcohol",
    "planear el futuro",
    "ver la televisión",
    "ducharse",
    "compararse con los demás",
    "pensar en el pasado",
    "querer agradar",
    "ir a la playa"
  ]);

  const handleCreateList = () => {
    const list = words.map((word, index) => {
      const effect = Math.floor(Math.random() * 10) >= 5 ? true : false;
      const intensity = Math.floor((Math.random() / 2) * 10 + 1);
      return {
        id: index,
        name: word,
        effect,
        intensity
      };
    });
    setActivities(list);
  };

  return (
    <>
      <h1>Demo</h1>
      <p>
        Dependiendo de tu estado de ánimo quizás te resulta difícil hacer una
        lista ahora mismo de todas tus actividades. Puede ser que te cueste
        llenar uno de los dos lados. Para hacer más fácil la tarea, y tener un
        punto de partida, aquí podrás ver ejemplos.
        <br />
        <br />
        Cada vez que pulses el botón de abajo se autogenerará una lista de
        actividades con un resultado. Las actividades se ordenarán
        aleatoriamente en cualquiera de los dos lados, puede que sin ningún
        sentido o lógica. Solo sirve para darte ideas por si no sabes como
        empezar o te sientes encallado. No pretende acertar o predecir nada.
      </p>
      <SubmitButton
        type="button"
        value="Pulsa"
        onClick={() => handleCreateList()}
      />
    </>
  );
};

export default ListRandom;
