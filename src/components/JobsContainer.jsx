import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loader from "./Loader";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loader center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs found</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Jobs Info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
