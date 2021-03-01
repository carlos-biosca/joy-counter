import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Home from './views/Home'
import Info from './views/Info'
import Demo from './views/Demo'

import styled, { ThemeProvider } from 'styled-components'
import colors from './theming/colors'


const Grid = styled.div`
  display: grid;
  grid-template-columns: 210px 1fr;
`

const Menu = styled.nav`
  width: 210px;
  height: 100vh;
  background-color: ${({ theme }) => theme.greycolor};
  text-align: center;

  & h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 4rem 0;
    padding: 6px;
  }

  & div{
    width: 168px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    & a{
      background-color: ${({ theme }) => theme.whitecolor};
      color: ${({ theme }) => theme.blackcolor};
      font-size: 2rem;
      padding: 15px;
      font-weight: bold;
      text-decoration: none;

      
      &.selected{
        background-color: ${({ theme }) => theme.blackcolor};
        color: ${({ theme }) => theme.whitecolor};
      }

      &:hover{
        color: ${({ theme }) => theme.redcolor};
      }

      &:focus{
        outline: none;
        color: ${({ theme }) => theme.redcolor};
      }
    }
  }
`

export default function App () {
  return (
    <Router>
      <Grid>

        <ThemeProvider theme={colors}>
          <Menu>
            <h1>Menu</h1>
            <div>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
              <NavLink activeClassName="selected" to="/info">Info</NavLink>
              <NavLink activeClassName="selected" to="/demo">Demo</NavLink>
            </div>
          </Menu>
        </ThemeProvider>

        <Switch>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Grid>
    </Router>
  );
}
