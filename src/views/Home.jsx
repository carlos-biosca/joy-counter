import React from "react";

import styled, { ThemeProvider } from "styled-components";

import colors from "../theming/colors";
import { ActivityProvider } from "../context/Activity.context";

import ActivityForm from "../components/Home/ActivityForm";
import ActivityLists from "../components/Home/ActivityLists";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 416px 1fr;
  max-height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.whitecolor};
  text-align: center;

  & h1 {
    width: 327px;
    font-size: 3rem;
    margin: 70px auto;
    color: ${({ theme }) => theme.blackcolor};
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
        <ActivityProvider>
          <Header>
            <h1>Contador de Alegría</h1>
            <ActivityForm />
          </Header>

          <Main>
            <ActivityLists />
          </Main>
        </ActivityProvider>
      </ThemeProvider>
    </Layout>
  );
};

export default Home;
