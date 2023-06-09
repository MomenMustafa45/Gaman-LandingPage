import React from "react";
import "./home.css";
import Landing from "../../components/home-comp/landing/Landing";
import Steps from "../../components/home-comp/steps/Steps";
import TopCreators from "../../components/home-comp/top-creators/TopCreators";
import Faq from "../../components/home-comp/faq/Faq";

const Home = () => {
  return (
    <main className="home-parent">
      <Landing />
      <Steps />
      <TopCreators />
      <Faq />
    </main>
  );
};

export default Home;
