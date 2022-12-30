import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const Aboute = () => {
    const {loader,user}=useContext(AuthContext)
    const data = useLoaderData()
    const {name,address,university}=data;
    return (
        <div>
            <dib>
               <h1 className='text-3xl text-end mr-10  mt-4'><Link to="/aboutEdit">Edit</Link></h1>
            </dib>
            <div className="hero ">
  <div className="hero-content ">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-center">My Information</h1>
      <h3 className='text-3xl mt-10 mx-3 font-bold'>Name  :  <span className='text-xl font-bold-none'>{name}</span>  </h3>
      <h3 className='text-3xl mt-10 mx-3 font-bold'>Email :  <span className='text-xl font-bold-none'>{user?.email}</span>  </h3>
      <h3 className='text-3xl mt-10 mx-3 font-bold'>Education   :  <span className='text-xl font-bold-none'>{university}</span>  </h3>
      <h3 className='text-3xl mt-10 mx-3 font-bold'>Address :  <span className='text-xl font-bold-none'>{address}</span>  </h3>
    </div>
  </div>
</div>
        </div>
    );
};

export default Aboute;