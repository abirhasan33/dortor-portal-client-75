import React from "react";

const PirmarayButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary fonnt-bold uppercase text-white bg-gradient-to-r from-secondary to-primary ">
        {children}
      </button>
    </div>
  );
};

export default PirmarayButton;
