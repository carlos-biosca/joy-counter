import styled from 'styled-components';

const Result = styled.section`
  color: ${({ theme }) => theme.whitecolor};
  text-align: center;
  font-weight: bold;
  margin: 50px auto;

  & h3 {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 48px;
  }

  & span {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 100px;
  }
`;

const ResultHome = styled(Result)`
  text-align: left;
  margin: 0 auto;

  & h3 {
    margin-bottom: 1rem;
  }

  & span {
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.yellowcolor} 0%,
      ${({ theme }) => theme.yellowcolor} ${({ result }) => result * 0.9}%,
      ${({ theme }) => theme.purplecolor} ${({ result }) => result}%,
      ${({ theme }) => theme.purplecolor} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { Result, ResultHome };