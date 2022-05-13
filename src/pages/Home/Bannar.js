import React from "react";
import chair from "../../assets/images/chair.png";
import PirmarayButton from "../Shared/PirmarayButton";
import "./Banar.css";

const Bannar = () => {
  return (
    <div className="hero min-h-screen bg-neutral px-12 banar-add">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="max-w-sm rounded-lg shadow-2xl" src={chair} alt="" />
        <div className="pr-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit sunt in beatae quaerat pariatur accusamus?
          </p>
          <PirmarayButton>GET STARTED</PirmarayButton>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
