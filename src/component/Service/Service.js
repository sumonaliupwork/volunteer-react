import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, img } = props.product;
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate(`/volunteer/${_id}`);

    }
    return (

        <div onClick={handleNextPage} className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Service;