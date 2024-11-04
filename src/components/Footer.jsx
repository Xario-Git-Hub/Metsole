import Svgs from "@/Assets/svgs";
import { Link } from "react-router-dom";

import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative xl:h-[660px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative xl:h-[calc(100vh+660px)] xl:-top-[100vh]">
        <div className="px-5 md:pt-28 sm:pt-16 pt-10 pb-10 bg-black sticky xl:top-[calc(100vh-660px)] xl:h-[660px]">
          <div className="flex items-center justify-between border-none md:gap-10 sm:gap-6 gap-4 flex-wrap">
            <div className="flex items-center gap-10"><span className="md:text-6xl sm:text-4xl text-3xl font-bold" style={{ WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px" }}>DROP US A MAIL</span> <span className=""><Svgs.ArrowUpLong className={'md:size-14 sm:size-12 size-10 rotate-45 fill-[#ffb600]'} /></span></div>
            <Link to='contact-us'><Button className={'hover:!bg-[#ffb200] !bg-[#004b86]'}>Get In Touch</Button></Link>
          </div>
          <hr className="border-b border-solid border-white/40 my-10" />
          <div className="grid xl:grid-cols-7 md:grid-cols-4 text-white gap-10 ">
            <div className="col-span-3 sm:col-span-3">
              <img src="/Images/Logo/met sole logo-01.png" alt="" className="w-24 h-auto sm:w-32 md:w-40  lg:w-48 xl:w-32" />
              <p className="p-2">Crafting innovative digital solutions that illuminate your brand`s unique story.</p>
            </div>
            <div className="w-fit">
              <h4 className="font-bold text-xl h-20 text-[#ffb600]">Company</h4>
              <div className="space-y-3">
               <p> <Link to='/' className=" cursor-pointer group hover:text-[#ffb600] text-white ">Home<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[60px] transition-all duration-400"></div></Link></p>
                <p> <Link to='our-services'  className=" cursor-pointer group hover:text-[#ffb600] text-white ">Services<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[65px] transition-all duration-400"></div></Link></p>
                <p><Link to='portfolio' className=" cursor-pointer group hover:text-[#ffb600] text-white">Portfolio<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[65px] transition-all duration-400"></div></Link></p>
                <p><Link to='contact-us' className=" cursor-pointer group hover:text-[#ffb600] text-white">Contact Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[90px] transition-all duration-400"></div></Link></p>
              </div>
            </div>

            <div className="sm:col-span-1 col-span-2 w-fit">
              <h4 className="font-bold text-xl h-20 text-[#ffb600]">Legal</h4>
              <div className="space-y-3">
               <p> <Link to='/GeneralErrorPage' className=" cursor-pointer group hover:text-[#ffb600] text-white ">404 Error Pages<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link></p>
                <p> <Link to='/NotFound'  className=" cursor-pointer group hover:text-[#ffb600] text-white ">Privacy Policy<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link></p>
                <p><Link to='/NotFound' className=" cursor-pointer group hover:text-[#ffb600] text-white">Licensing<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[70px] transition-all duration-400"></div></Link></p>
                <p><Link to='/NotFound' className=" cursor-pointer group hover:text-[#ffb600] text-white">Business Guide<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link></p>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-3 w-fit">
              <h4 className="font-bold text-xl h-20 text-[#ffb600]">Creative Agency</h4>
              <div className="space-y-4">
              <p className=" cursor-pointer group hover:text-[#ffb600] text-white">8403 PINES BLVD, PEMBROKE PINES, FL 33024<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></p>
                <p className=" cursor-pointer group hover:text-[#ffb600] text-white">Info@metsole.com<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-[150px] transition-all duration-400"></div></p>                
                <div className="flex space-x-4 ">
                <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
                  <a href='https://www.linkedin.com/company/metsole/' target='_blank'><Svgs.Linkedin className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /></a>
                </div>

                <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
                  <a href="https://www.facebook.com/profile.php?id=61560851851780" target='_blank'><Svgs.FaceBook className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /></a>
                </div>
                <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full bg-white hover:scale-105 hover:bg-[#ffb600] transition-all group">
                  <a href="http://www.instagram.com/met_sole" target='_blank'><Svgs.Instagram className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /> </a>
                </div>
                </div>
              </div>
            </div>

          </div>
          <hr className="border-b border-solid border-white/40 my-5" />
          <div className="flex items-center justify-center md:flex-row flex-col  text-white">
            <p className="">All Right Reserved © 2024 <span className="cursor-pointer border-b w-fit hover:text-[#ffb600] transition-all hover:border-b-[#ffb600]"> <Link to='/'>MetsoleTech </Link></span></p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
