import React from "react";

import styled, { ThemeProvider } from "styled-components";

import colors from "../theming/colors";
import { ActivityProvider } from "../context/Activity.context";

import Layout from "../components/styled/Layout";
import { Header } from "../components/styled/Header";

import ActivityForm from "../components/Home/ActivityForm";
import ActivityLists from "../components/Home/ActivityLists";

const Main = styled.main`
  background-color: ${({ theme }) => theme.blackcolor};
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
