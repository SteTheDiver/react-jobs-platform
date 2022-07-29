import React, { useState } from "react";
import { useSelector } from "react-redux";

import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);

  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthyl Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {!barChart ? "Bar Chart" : "Area Chart"}
      </button>
      <>{barChart ? <BarChart data={data} /> : <AreaChart data={data} />}</>
    </Wrapper>
  );
};

export default ChartsContainer;
