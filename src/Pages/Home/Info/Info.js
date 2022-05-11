import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 px-10">
        <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-teal-400 to-emerald-400" img={clock} />
        <InfoCard cardTitle="Our Location" bgClass="bg-slate-700" img={marker} />
        <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-teal-400 to-emerald-400" img={phone} />
      </div>
    </div>
  );
};

export default Info;
