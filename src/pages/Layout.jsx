import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppImg from '../../public/Images/assets/WhatApp.png'
const Layout = ({servicesData}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8955B] !bg-center !bg-auto" style={{background: 'url(/Images/assets/bg-path.png)', backgroundAttachment:'scroll'}}>
      <Navbar servicesData={servicesData}/>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <div className="fixed right-3 bottom-3 flex items-center justify-center z-50">
        <a href="https://wa.me/17543050779" target="_blank"><img src={WhatsAppImg} alt="WA" className='size-14' /></a>
      </div>
    </div>
  );
};

export default Layout;
