import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-4">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel dolores rem corrupti omnis impedit iusto consequatur veniam asperiores
          sunt.
        </p>
        <div className="flex items-center mt-5">
          <div className="avatar">
            <div className="w-22 rounded-full ring ring-teal-400 ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
