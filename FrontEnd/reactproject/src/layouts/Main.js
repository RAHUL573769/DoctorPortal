import React from 'react';
import Header from '../Componenets/Shared/Header/Header';
import Footer from '../Componenets/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>  
        </div>
    );
};

export default Main;