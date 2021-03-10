import React from "react";

import ListEffect from "./ListEffect";
import ResultsContainer from "./ResultsContainer";

import { ListsContainer } from "../styled/ContainerGrid";

const ActivityLists = () => {
  return (
    <>
      <ListsContainer>
        <ListEffect effect={true} />
        <ListEffect effect={false} />
      </ListsContainer>
      <ResultsContainer />
    </>
  );
};

export default ActivityLists;
