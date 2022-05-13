import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
      <InfoCard
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opneing Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgclass="bg-[#19D3AE]"
        cardTitle="Our Locations"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgclass="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
