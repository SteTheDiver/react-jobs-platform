import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

import { Statistics, ChartsContainer, Loader } from "../../components";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loader center/>;
  }

  return (
    <>
      <Statistics />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
