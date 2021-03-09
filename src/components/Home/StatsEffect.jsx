import React from "react";

import Stats from "../styled/Stats";

const StatsEffect = ({ effect, count, medium }) => {
  return (
    <Stats effect={effect}>
      <p>
        Actividades {effect} <span>{count}</span>
      </p>
      <p>
        Intensidad media <span>{medium}</span>
      </p>
    </Stats>
  );
};

export default StatsEffect;
