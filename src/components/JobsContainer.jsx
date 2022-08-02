import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loader from "./Loader";
import PagesButton from "./PagesButton";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    sort,
    search,
    searchStatus,
    searchType,
    status,
  } = useSelector((store) => store.allJobs);

  console.log(totalJobs, numOfPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, sort, search, searchType, searchStatus, status]);

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
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {totalJobs > 1 && <PagesButton />}
    </Wrapper>
  );
};

export default JobsContainer;
