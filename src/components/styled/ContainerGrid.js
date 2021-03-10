import styled from 'styled-components';

const ContainerGrid = styled.div`
  width: 700px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 350px);
`;

const ListsContainer = styled(ContainerGrid)`
  height: 600px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const StatsContainer = styled(ContainerGrid)`
  height: 324px;
`;

export { ContainerGrid, ListsContainer, StatsContainer };