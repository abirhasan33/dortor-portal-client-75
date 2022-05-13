import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import caviry from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride treatment",
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: "Caviry treatment",
            description: '',
            img: caviry
        },
        {
            _id: 3,
            name: "Teeth treatment",
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center mb-5'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl font-bold uppercase'>Services We Provider</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mx-14 gap-10'>
                {
                    services.map(service=> <Service kry={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;