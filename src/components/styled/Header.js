import styled from 'styled-components'

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

const HeaderInfo = styled(Header)`
  & p {
    text-align: left;
    font-size: 21px;
    padding: 2rem;
     height: 650px;
     border-top: 1px solid ${({ theme }) => theme.blackcolor};
     border-bottom: 1px solid ${({ theme }) => theme.blackcolor};
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  }
`;


export { Header, HeaderInfo };