import React from "react";
import Landing from "../../components/home-comp/landing/Landing";
import Steps from "../../components/home-comp/steps/Steps";
import TopCreators from "../../components/home-comp/top-creators/TopCreators";

const Home = () => {
  return (
    <main>
      <Landing />
      <Steps />
      <TopCreators />
    </main>
  );
};

export default Home;
