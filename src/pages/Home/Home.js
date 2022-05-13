import React from 'react';
import Footer from '../Shared/Footer';
import Bannar from './Bannar';
import Dental from './Dental';
import Info from './Info';
import Input from './Input';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonils from './Testimonils';

const Home = () => {
    return (
        <div className='px-12'>
            <Bannar></Bannar>
            <Info ></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonils></Testimonils>
            <Input></Input>
            <Footer></Footer>
        </div>
    );
};

export default Home;