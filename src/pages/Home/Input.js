import React from "react";
import appointment from "../../assets/images/appointment.png";
import PirmarayButton from "../Shared/PirmarayButton";

const Input = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="mx-12 text-center pb-10"
    >
      <h2 className="text-xl text-primary font-bold pt-10">contact us</h2>
      <h1 className="text-3xl text-white font-bold pb-8">
        Stay Contact with us
      </h1>
      <input
        type="email"
        placeholder="Email Address"
        className="input input-bordered input-sm h-10 w-full max-w-xs mt-3"
      />
      <br />
      <input
        type="text"
        placeholder="Subjects"
        className="input input-bordered input-sm w-full h-10 max-w-xs mt-3"
      />
      <br />
      <input
        type="text"
        placeholder="Messiges"
        className="input input-bordered input-lg h-28 w-full max-w-xs mt-3 mb-5"
      />
      <PirmarayButton>
        <span className="px-6">SUBMIT</span>
      </PirmarayButton>
    </div>
  );
};

export default Input;
