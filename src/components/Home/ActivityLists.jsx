import React from "react";
import styled from "styled-components";

import ListEffect from "./ListEffect";
import ResultsContainer from "./ResultsContainer";

import ContainerGrid from "../styled/ContainerGrid";

const ListsContainer = styled(ContainerGrid)`
  height: 600px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

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
