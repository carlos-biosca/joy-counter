import React, { useContext } from "react";

import { ActivityContext } from "../../context/Activity.context";

import StatsEffect from "./StatsEffect";
import { StatsContainer } from "../styled/ContainerGrid";
import { ResultHome } from "../styled/Result";

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
      <ResultHome result={result}>
        <span>{result}%</span>
      </ResultHome>
    </StatsContainer>
  );
};

export default ResultsContainer;
