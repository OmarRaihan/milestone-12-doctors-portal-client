import React from "react";

const Service = ({service}) => {
  return (
    <div>
      <div className="card lg:max-w-lg sm:max-w-sm md:max-w-md bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={service.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure corrupti nesciunt magni. Ut, tenetur illo. Vel nesciunt maiores quibusdam.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
