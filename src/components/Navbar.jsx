import React from 'react';
import { Link } from 'react-router-dom';
import Svgs from '@/Assets/svgs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = ({ servicesData }) => {
  // Filter categories with showInNav set to true
  const categories = [...new Set(servicesData.filter(service => service.showInNav).map(service => service.category))];

  return (
    <>
      <nav className="flex items-center justify-between z-50 px-10 py-5 bg-gradient-to-b absolute top-0 w-full from-[#000] to-[#F2295B00]">
        <Link to='/'><div className="w-16 flex h-auto object-contain font-bold text-3xl"><h1 className='text-[#004a86] flex'>Met <span className='text-[#ffb600]'>Sole</span></h1> </div></Link>
        <ul className="lg:flex hidden justify-center font-lightbold">
          <li className="mx-4">
            <Link to="/" className="group hover:text-[#ffb600] text-white">Home<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          {/* <li className="mx-4">
            <Link to="/about-us" className="group hover:text-[#ffb600] text-white">About Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li> */}
          <li className="mx-4">
            <DropdownMenu>
              <DropdownMenuTrigger className='focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'>
                <div className="group hover:text-[#ffb600] text-white">Services<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></div></DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link to={'/our-services'}>
                  <DropdownMenuLabel>Our Services</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                {categories.map((category, index) => (
                  <Link to={`/our-services/${category}`} key={index}>
                    <DropdownMenuItem className="group hover:text-[#ffb600]">
                      <div className="cursor-pointer">
                        {category}
                        <div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="mx-4">
            <Link to="/portfolio" className="group hover:text-[#ffb600] text-white">Portfolio<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          <li className="mx-4">
            <Link to="/faq" className="group hover:text-[#ffb600] text-white">Faqs<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
          <li className="mx-4">
            <Link to="/contact-us" className="group hover:text-[#ffb600] text-white">Contact Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
          </li>
        </ul>
        <div className="hidden support lg:flex items-center gap-2">
          <div className="whatsapp"><Svgs.Phone className={'w-10 h-10 p-2 fill-white rounded-full border-white border'} /></div>
          <div className="text-white">
            <p className="">Support Center</p>
            <a href="tel:+1 (754) 305-0779"><h4 className="hover:text-[#ffb600] font-medium cursor-pointer">+1 (754) 305-0779</h4></a>
          </div>

        </div>
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className={'w-fit h-fit !bg-transparent !border-none !outline-none'}><Svgs.Hambar className={'w-5 h-auto fill-white'} /></Button>
            </SheetTrigger>
            <SheetContent className={'flex items-center justify-between flex-col'}>
              <ul className="flex flex-col items-center justify-center font-bold space-y-10 flex-1">
                <li className="mx-4">
                  <SheetClose asChild>
                    <Link to="/" className="group hover:text-[#ffb600]">Home<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                  </SheetClose>
                </li>
                <li className="mx-4">
                  <SheetClose asChild>
                    <Link to="/about-us" className="group hover:text-[#ffb600]">About Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                  </SheetClose>
                </li>
                <li className="mx-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger className='focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'>
                      <div className="group hover:text-[#ffb600]">Services<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></div></DropdownMenuTrigger>
                    <DropdownMenuContent className={'text-center p-4 py-2'}>
                      <SheetClose asChild>
                        <DropdownMenuLabel>Branding</DropdownMenuLabel>
                      </SheetClose>
                      <SheetClose asChild>
                        <DropdownMenuLabel>Web Development</DropdownMenuLabel>
                      </SheetClose>
                      <SheetClose asChild>
                        <DropdownMenuLabel>Digital Marketing</DropdownMenuLabel>
                      </SheetClose>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="mx-4">
                  <SheetClose asChild>
                    <Link to="/Portfolio" className="group hover:text-[#ffb600]">Portfolio<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                  </SheetClose>
                </li>
                <li className="mx-4">
                  <SheetClose asChild>
                    <Link to="/Faq" className="group hover:text-[#ffb600]">Faqs<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                  </SheetClose>
                </li>
                <li className="mx-4">
                  <SheetClose asChild>
                    <Link to="/contact-us" className="group hover:text-[#ffb600]">Contact Us<div className="rounded-[30px] bg-[#ffb600] h-[3px] w-[0px] group-hover:w-full transition-all duration-400"></div></Link>
                  </SheetClose>
                </li>
              </ul>
              <SheetFooter>
                <SheetClose asChild>
                  <div className="support flex items-center gap-2">
                    <div className="whatsapp"><Svgs.Phone className={'w-10 h-10 p-2 fill-black rounded-full border-black border'} /></div>
                    <div className="text-black">
                      <p className="">Support Center</p>
                      <a href="tel:+1 (754) 305-0779"></a><h4 className="hover:text-[#ffb600] font-medium">+1 (754) 305-0779</h4>
                    </div>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
