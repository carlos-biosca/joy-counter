import styled from 'styled-components';

const Stats = styled.section`
  margin-bottom: 2rem;
  font-size: 24px;

  & p {
    margin: 14px auto;
    display: flex;
    justify-content: space-between;
    width: 300px;
    color: ${({ effect, theme }) =>
    effect === 'negativas' ? theme.purplecolor : theme.yellowcolor};
  }

  & p:nth-child(2) {
    padding-left: 2rem;

    & span:nth-child(1) {
      padding-right: 1rem;
    }
  }

  & span {
    color: ${({ theme }) => theme.whitecolor};
  }
`;

export default Stats;