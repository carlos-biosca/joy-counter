import styled from 'styled-components'

const Header = styled.header`
  background-color: ${({ theme }) => theme.whitecolor};
  text-align: center;
  font-size: 1.2rem;

  & h1 {
    width: 327px;
    font-size: 3rem;
    margin: 50px auto;
    color: ${({ theme }) => theme.blackcolor};
  }
`;

const HeaderInfo = styled(Header)`
  & div {
    height: 630px;
    overflow: scroll;
    padding: 0 2rem;
    border-top: 1px solid ${({ theme }) => theme.blackcolor};
    border-bottom: 1px solid ${({ theme }) => theme.blackcolor};
    ::-webkit-scrollbar {
    width: 0px;
    }
    text-align: left;
  }

  & ol {
    margin-top: 1,5rem;
  }
`;


export { Header, HeaderInfo };