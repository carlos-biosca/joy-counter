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

  & div{
    width: 168px;
    display: flex;
    flex-direction: column;
    margin: 195px auto 0;

    & a{
      background-color: ${({ theme }) => theme.whitecolor};
      color: ${({ theme }) => theme.blackcolor};
      font-size: 2rem;
      padding: 15px;
      font-weight: bold;
      text-decoration: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
