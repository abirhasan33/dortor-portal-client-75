import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentBanar = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="hero min-h-screen mx-auto"
    >
      <div className="hero-content flex-col lg:flex-row-reverse mx-5">
        <img src={chair} alt="" className="max-w-sm rounded-lg shadow-3xl" />
        <div className="drop-shadow-2xl mx-5">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanar;
