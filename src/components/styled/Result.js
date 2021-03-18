import styled from 'styled-components';

const Result = styled.section`
  color: ${({ theme }) => theme.whitecolor};
  text-align: center;
  font-weight: 700;
  margin: 20px auto;

  & span {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 140px;
  }
`;

const ResultHome = styled(Result)`

  & span {
    background: linear-gradient(
      to bottom,
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