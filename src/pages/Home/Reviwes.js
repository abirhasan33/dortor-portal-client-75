import React from "react";

const Reviwes = ({ reviews }) => {
  return (
    <div className="card lg:max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          If a dog chews shoes whose shoes does he Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Velit, fugit?
        </p>
        <div className="flex items-center pt-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={reviews.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{reviews.name}</h4>
            <p>{reviews.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviwes;
