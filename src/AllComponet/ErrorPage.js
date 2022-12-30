import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPages = () => {
    const error = useRouteError()
    return (
        <div>

<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmQlNUN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{error.status}</h2>
    <p>{error.data.hrEmail}</p>
   
  </div>
</div>
        <h1></h1>
        <h2>{error.data.sorry}</h2>
        <p>
            
        </p>
      </div>
    );
};

export default ErrorPages;