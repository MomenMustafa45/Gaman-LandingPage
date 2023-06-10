import React from "react";
import "./home.css";
import Landing from "../../components/home-comp/landing/Landing";
import Steps from "../../components/home-comp/steps/Steps";
import TopCreators from "../../components/home-comp/top-creators/TopCreators";
import Faq from "../../components/home-comp/faq/Faq";
import BottomCard from "../../components/home-comp/bottom-card/BottomCard";

const Home = () => {
  return (
    <main className="home-parent">
      <Landing />
      <Steps />
      <TopCreators />
      <Faq />
      <BottomCard />
    </main>
  );
};

export default Home;
