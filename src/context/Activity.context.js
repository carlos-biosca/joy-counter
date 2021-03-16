import React, { useState, createContext } from 'react';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  return <ActivityContext.Provider value={[activities, setActivities]}>{children}</ActivityContext.Provider>
}

export { ActivityProvider, ActivityContext };