import React from "react";

import styled, { ThemeProvider } from "styled-components";
import colors from "../theming/colors";

import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 416px 1fr;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.whitecolor};
  text-align: center;

  & h1 {
    width: 327px;
    font-size: 3rem;
    margin: 70px auto;
    color: ${({ theme }) => theme.redcolor};
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.blackcolor};
  text-align: center;
`;

const Home = () => {
  return (
    <Layout>
      <ThemeProvider theme={colors}>
        <Header>
          <h1>Contador de Alegría</h1>
          <ActivityForm />
        </Header>

        <Main>
          <ActivityList />
        </Main>
      </ThemeProvider>
    </Layout>
  );
};

export default Home;
