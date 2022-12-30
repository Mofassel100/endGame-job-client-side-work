import React from 'react';
import { Link } from 'react-router-dom';

const ImgTexl = ({ imgAnText }) => {
    return (


        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={imgAnText?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{imgAnText?.message}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to="/details">Details</Link></button>
                </div>
            </div>

        </div>

    );
};

export default ImgTexl;