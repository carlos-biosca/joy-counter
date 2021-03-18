import React from "react";
import styled, { ThemeProvider } from "styled-components";

import colors from "../theming/colors";
import { ActivityProvider } from "../context/Activity.context";

import ListRandom from "../components/Demo/ListRandom";

import Layout from "../components/styled/Layout";
import { Header } from "../components/styled/Header";

import ActivityLists from "../components/Home/ActivityLists";

const HeaderDemo = styled(Header)`
  & p {
    text-align: left;
    padding: 0 2rem 3rem;
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.blackcolor};
`;

const Demo = () => {
  return (
    <Layout>
      <ThemeProvider theme={colors}>
        <ActivityProvider>
          <HeaderDemo>
            <ListRandom />
          </HeaderDemo>

          <Main>
            <ActivityLists />
          </Main>
        </ActivityProvider>
      </ThemeProvider>
    </Layout>
  );
};

export default Demo;
