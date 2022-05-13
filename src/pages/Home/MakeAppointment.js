import React from 'react';
import dorcor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PirmarayButton from '../Shared/PirmarayButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex mx-12 justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={dorcor} alt="" />
            </div>
            <div className='flex-1 pr-16'>
                <h3 className='text-xl text-primary font-bold'> Appointment</h3>
                <h2 className='text-3xl text-white py-3'>Make an Appointment Tody</h2>
                <p className='text-white pb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet adipisci nobis laboriosam quos veniam perferendis nulla eius laudantium consequatur repellat rem nesciunt molestias facilis officia veritatis natus reprehenderit minima ad ducimus quo impedit asperiores. Earum commodi ut consectetur impedit..</p>
                <PirmarayButton>GET STARTED</PirmarayButton>
            </div>
        </section>
    );
};

export default MakeAppointment;