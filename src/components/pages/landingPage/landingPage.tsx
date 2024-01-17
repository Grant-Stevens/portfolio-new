import React from "react";
import "./landingPage.scss";
import PageTemplate from "../../templates/pageTemplate/pageTemplate";

const LandingPage = () => {
  return (
    <PageTemplate>
      <h1>Welcome to my portfolio</h1>
      <img className={"portrait"} src="" alt="My portrait" />
    </PageTemplate>
  );
};

export default LandingPage;
