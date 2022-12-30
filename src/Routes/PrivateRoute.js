import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const PrivateRoute = ({children}) => {
  
    const {user,loader}=useContext(AuthContext)
    const location =useLocation()
   
     if(loader){
        return <div className="flex justify-center items-center h-screen bg-green-300">
        <div className="grid gap-2">
             
            <div className="flex items-center justify-center ">Loading
                <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>

    </div>
     }
     if(!user){
        return <Navigate to='/login' state={{from:location}} replace />


     }
     return children
     
    
}; 

export default PrivateRoute;