import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import banner from "../../../assets/images/treatment.png";
import Service from "../Service/Service";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div>
      <div className=" container mx-auto my-24">
        <div className="text-center mb-10">
          <h3 className="text-teal-500 text-2xl font-bold uppercase">Our Services</h3>
          <p className="text-3xl mb-2">Services We Provide</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="hero min-h-screen mb-28">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="sm:max-w-sm lg:max-w-lg md:max-w-md xl:max-w-xl rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing packages and web page
            </p>
            <div>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
