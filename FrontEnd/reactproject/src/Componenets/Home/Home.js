import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Appointent from "../MakeAppointment/Appointent";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <InfoCards></InfoCards>

      <Services></Services>

      <Appointent></Appointent>
    </div>
  );
};

export default Home;
