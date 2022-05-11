import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import bg from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
    }}
    className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="sm:max-w-sm lg:max-w-lg md:max-w-md xl:max-w-3xl rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
