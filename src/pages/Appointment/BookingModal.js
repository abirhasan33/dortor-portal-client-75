import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const BookingModal = ({ teatment, date, setTeatment }) => {
  const { _id, name, slots } = teatment;

  const hadelBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTeatment(null);
  };
  const [user] = useAuthState(auth);

  return (
    <div className="mt-2 bg-slate-400">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={hadelBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              value={user?.displayName || ''} disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"value={user?.email || ''} disabled className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary input-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
