import React from "react";
import treatment from "../../assets/images/treatment.png";
import PirmarayButton from "../Shared/PirmarayButton";

const Dental = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-12 mb-40">
      <div className="">
        <img className="lg:ml-10" width={350} src={treatment} alt="" />
      </div>
      <div className="px-4 justify-center align-middle mt-28">
        <h2 className="card-title text-4xl font-bold mb-2">
          Exceptional Dental Care, on Your Termss
        </h2>
        <p className="mb-4">
          Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur est, nostrum officiis eaque
          quae eveniet! Quam, libero odio. Voluptas illum natus sunt blanditiis
          in magnam!
        </p>
        <PirmarayButton>GET STARTED</PirmarayButton>
      </div>
    </div>
  );
};

export default Dental;
