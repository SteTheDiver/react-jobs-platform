import React from "react";
import { Link } from "react-router-dom";

import pageNotFound from "../assets/images/pageNotFound.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={pageNotFound} alt="not found" />
        <h3>Page not Found</h3>
        <p>The page you are looking for is not here</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
