import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, img } = props.product;
    return (

        <Link to={`/volunteer/${_id}`}>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="title">{name.toUpperCase()}</h5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Service;