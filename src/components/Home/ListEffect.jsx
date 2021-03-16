import React, { useContext } from "react";

import { ActivityContext } from "../../context/Activity.context";

import { List, ListItem } from "../styled/Lists";

const ListEffect = ({ effect }) => {
  const [activities, setActivities] = useContext(ActivityContext);

  const handleDelete = id => {
    const newList = activities.filter(item => item.id !== id);
    setActivities(newList);
  };
  return (
    <List>
      {activities
        .filter(activity => activity.effect === effect)
        .map(item => {
          return (
            <ListItem key={item.id} effect={effect}>
              <button type="button" onClick={() => handleDelete(item.id)}>
                -
              </button>
              <div>
                <p>{item.name}</p>
                <span>{item.intensity}</span>
              </div>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ListEffect;
