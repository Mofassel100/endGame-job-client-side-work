import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navber from './Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Main;