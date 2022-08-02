import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../assets/wrappers/SearchJob";
import { FormRow, FormSelect } from "../components";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchJob = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchJob;
