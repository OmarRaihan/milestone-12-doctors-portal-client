import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div>
      <div className={`card lg:card-side bg-base-100 justify-center shadow-xl ${bgClass}`}>
        <figure className="pl-5 pt-5">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit animi laboriosam nesciunt illum libero veritatis commodi beatae
            maiores blanditiis!
          </p>
        </div>
      </div>

      {/* Banner */}
    </div>
  );
};

export default InfoCard;
