import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanar from './AppointmentBanar';
import AvailableAppoitments from './AvailableAppoitments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='mx-12'>
            <AppointmentBanar date={date} setDate={setDate}></AppointmentBanar>
            <AvailableAppoitments date={date}></AvailableAppoitments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;