import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Medias = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            {
                data.map(imgtex=><>
                <div key={imgtex?._id} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={imgtex?.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      
      <p className="py-6 text-xl font-bold">{imgtex?.message}</p>
      <button className="btn btn-primary"><Link to="/details">Details</Link></button>
    </div>
  </div>
</div>
                </>)
            }
            
        </div>
    );
};

export default Medias;