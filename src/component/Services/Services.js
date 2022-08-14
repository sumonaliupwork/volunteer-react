import React from 'react';
import './Services.css';



const Services = () => {
    return (
        <div className='services container'>
            <h2 className='text-uppercase'>I Crow by helping people in need</h2>
            <div className="row row-cols-1">
                <div class="input-group mb-3 mx-auto">
                    <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary btnPrimary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Services;