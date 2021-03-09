import React, { useContext } from "react";
import styled from "styled-components";
import { ActivityContext } from "../../context/Activity.context";

import StatsEffect from "./StatsEffect";
import ContainerGrid from "../styled/ContainerGrid";

const StatsContainer = styled(ContainerGrid)`
  height: 324px;
`;

const Result = styled.section`
  color: ${({ theme }) => theme.whitecolor};
  text-align: left;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;

  & h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 48px;
  }

  & p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 100px;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.yellowcolor} 0%,
      ${({ theme }) => theme.yellowcolor} ${({ result }) => result * 0.75}%,
      ${({ theme }) => theme.purplecolor} ${({ result }) => result}%,
      ${({ theme }) => theme.purplecolor} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ResultsContainer = () => {
  const [activities] = useContext(ActivityContext);

  const getNum = value => {
    let count = 0;
    for (let item of activities) {
      if (item.effect === value) {
        count++;
      }
    }
    return count;
  };

  const getMedium = (value, count) => {
    let medium = 0;
    for (let item of activities) {
      if (item.effect === value) {
        medium += item.intensity;
      }
    }
    if (count === 0) {
      medium = 0;
    } else {
      medium = medium / count;
    }
    return medium.toFixed(2);
  };

  const getTotals = (count, medium) => {
    let total = count * medium;
    return total;
  };

  const getResult = (positive, negative) => {
    let result = 0;
    if (positive || negative !== 0) {
      result = (positive / (positive + negative)) * 100;
    }
    return (result = Math.floor(result));
  };

  const positiveCount = getNum(true);
  const negativeCount = getNum(false);

  const positiveMedium = getMedium(true, positiveCount);
  const negativeMedium = getMedium(false, negativeCount);

  const positiveTotal = getTotals(positiveCount, positiveMedium);
  const negativeTotal = getTotals(negativeCount, negativeMedium);

  const result = getResult(positiveTotal, negativeTotal);

  return (
    <StatsContainer>
      <div>
        <StatsEffect
          effect={"positivas"}
          count={positiveCount}
          medium={positiveMedium}
        />
        <StatsEffect
          effect={"negativas"}
          count={negativeCount}
          medium={negativeMedium}
        />
      </div>
      <Result result={result}>
        <h2>Alegría</h2>
        <p>{result}%</p>
      </Result>
    </StatsContainer>
  );
};

export default ResultsContainer;
