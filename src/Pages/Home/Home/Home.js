import React from "react";
import Contact from "../../Contact/Contact";
import MakeAppointment from "../../MakeAppointment/MakeAppointment";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
