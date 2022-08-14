import React from 'react';
import DisplayServices from '../DisplayServices/DisplayServices';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>

            <Services></Services>
            <DisplayServices></DisplayServices>
        </div>
    );
};

export default Home;