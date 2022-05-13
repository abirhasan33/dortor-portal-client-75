import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppoitments = ({date}) => {
    const [services , setServices] = useState([]);
    const [teatment, setTeatment] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div>
            <h4 className="text-xl text-primary text-center mt-5">Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Services key={service._id} service={service} setTeatment={setTeatment}></Services>)
                }
            </div>
            {
                teatment && <BookingModal date={date} teatment={teatment} setTeatment={setTeatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoitments;