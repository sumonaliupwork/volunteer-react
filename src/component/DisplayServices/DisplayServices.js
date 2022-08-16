import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import CircularProgress from '@mui/material/CircularProgress';



const DisplayServices = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch(`https://quiet-earth-89522.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container pb-5'>

            {services.length === 0 ?
                <span className='circle'><CircularProgress /></span> :

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        services.map(product => <Service
                            key={product._id}
                            product={product}
                        ></Service>)
                    }
                </div>
            }



        </div>
    );
};

export default DisplayServices;