import React, { useState, createContext } from 'react';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    {
      id: 0,
      name: 'dieta saludable',
      effect: true,
      intensity: 5
    },
    {
      id: 1,
      name: 'dormir bien',
      effect: true,
      intensity: 3
    },
    {
      id: 2,
      name: 'actividad física',
      effect: true,
      intensity: 5
    },
    {
      id: 3,
      name: 'estrés',
      effect: false,
      intensity: 4
    },
    {
      id: 4,
      name: 'leer libros',
      effect: true,
      intensity: 2
    },
    {
      id: 5,
      name: 'vida social',
      effect: true,
      intensity: 3
    },
    {
      id: 6,
      name: 'trabajo',
      effect: false,
      intensity: 1
    },
    {
      id: 7,
      name: 'preocupaciones',
      effect: false,
      intensity: 5
    },
    {
      id: 8,
      name: 'fumar',
      effect: false,
      intensity: 3
    },
  ]);
  return <ActivityContext.Provider value={[activities, setActivities]}>{children}</ActivityContext.Provider>
}

export { ActivityProvider, ActivityContext };