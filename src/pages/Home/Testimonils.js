import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviwes from './Reviwes';

const Testimonils = () => {
    const review = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviws: '',
            img: people1,
            location: 'califonia'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            reviws: '',
            img: people2,
            location: 'califonia'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            reviws: '',
            img: people3,
            location: 'califonia'
        },
    ]
    return (
        <section className='mx-12 my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What our Patiensts say</h2>
                </div>
                <div>
                    <img src={quote} className="lg:w-48 w-24" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(reviews=> <Reviwes key={reviews._id} reviews={reviews}></Reviwes>)
                }
            </div>
        </section>
    );
};

export default Testimonils;