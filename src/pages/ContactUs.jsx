import React, { useRef, useState } from 'react';
import Svgs from "@/Assets/svgs";
import Contact from '/Images/Contact/Contact.jpg';
import Slide__Image__1 from '/Images/assets/home-1-team-03.jpg';
import contactPerson from '/Images/Contact/Contactimage2.jpg';
import HeaderLayout from '@/components/SectionLayout/HeaderLayout';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import { ContactIcon, Facebook, Instagram, InstagramIcon, LocateFixedIcon, PhoneCallIcon, X, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm('service_8sgew1f', 'template_xm3pjr8', form.current, {
                publicKey: '-eJfKTZECCcMGQ0kp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Form Send Successfully')
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Something went wrong')
                    setLoading(false);
                },
            );
    };


    return (
        <>
            <HeaderLayout heading={'Contact Us'} page={'Contact Us'} />
            <SectionLayout title={'Contact Us'} className={'bg-white !pb-0'} mainHeading={'Reach Us For Instant Service'} subHeading={'Get in touch with our team for tailored solutions to elevate your business. Whether you have questions, need more details, or want to discuss a project, we`re ready to assist. Contact us today to begin a conversation about how we can support your goals.'} >
                <div className="flex items-start lg:flex-row flex-col-reverse gap-10">
                    <form className="p-10 space-y-6 bg-[#f6f6f6] flex-1 w-full" ref={form} onSubmit={sendEmail}>
                        <Input
                            placeholder='Your Name'
                            required
                            type='text'
                            name="user_name"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Input
                            required
                            placeholder='Your Email'
                            type='email'
                            name="user_email"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Input
                            placeholder='Your Phone Number'
                            type='number'
                            name="phone_number"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />

                        <Input
                            placeholder='Subject'
                            type=''
                            name="subject"
                            className={'!p-5 !py-8 placeholder:text-lg text-lg'}
                        />
                        <Textarea placeholder="Type your message here." name="message" className={'!p-5 min-h-40 max-h-80 placeholder:text-lg text-lg'} id="message" />
                        <Input type="submit"
                            value={loading ? 'Loading...' : 'Submit Request'} // Conditionally render button text
                            disabled={loading} // Disable button when loading
                            className={`text-white cursor-pointer bg-[#ffb600] rounded-full w-fit px-10 ${loading ? 'opacity-50' : ''
                                }`} />
                    </form>
                    <div className="p-12 bg-[#ffb600] rounded-md text-white space-y-4 lg:w-[430px] w-full">
                        <h2 className="text-5xl font-medium text-center">Say Hello!</h2>
                        <p className="">Let`s connect and start something amazing! Say hello and share your vision with us.</p>
                        <img src={contactPerson} className='w-full h-auto object-cover rounded-3xl' alt="" />
                        <h4 className="text-3xl font-medium text-center">Inquiries</h4>
                        <p className="text-center">info@metsole.com</p>
                        <div className="flex items-center w-full justify-evenly">

                            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full  hover:scale-105 hover:bg-[#ffb600] transition-all group">
                                <a href='https://www.linkedin.com/company/metsole/' target='_blank'><Svgs.Linkedin className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /></a>
                            </div>

                            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full  hover:scale-105 hover:bg-[#ffb600] transition-all group">
                                <a href="https://www.facebook.com/profile.php?id=61560851851780" target='_blank'><Svgs.FaceBook className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /></a>
                            </div>
                            <div className="size-9 flex items-center justify-center  cursor-pointer rounded-full  hover:scale-105 hover:bg-[#ffb600] transition-all group">
                                <a href="http://www.instagram.com/met_sole" target='_blank'><Svgs.Instagram className={'size-5 fill-black group-hover: transition-all group-hover:scale-75 group-hover:fill-[#004b86]'} /> </a>
                            </div>
                        </div>

                    </div>
                </div>
            </SectionLayout>
            <SectionLayout title={'Address'} className={'bg-white'} mainHeading={'MetSole Agency Office Locations'} >
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#ffb600] group rounded-full drop-shadow-lg transition-all duration-500">{<LocateFixedIcon className='w-7 h-7 drop-shadow-lg  group-hover:fill-[] group-hover:stroke-[#004b86] stroke-[#ffb600]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Head Office</h4>
                            <ul className="space-y-4">
                                <li className=""> 8403 PINES BLVD, PEMBROKE PINES, FL 33024</li>
                                <li className="">Gulf Executive Offices, Manama, Bahrain</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#ffb600] group rounded-full drop-shadow-lg transition-all duration-500">{<PhoneCallIcon className='w-7 h-7 drop-shadow-lg  group-hover:fill-[] group-hover:stroke-[#004b86] stroke-[#ffb600]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Mobile Number</h4>
                            <div className="space-y-4">
                                <p className="">+1 (754) 305-0779</p>
                                <p className="">+973 3343 1826</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center justify-center min-w-16 size-16  bg-[#f6f6f6] hover:bg-[#ffb600] group rounded-full drop-shadow-lg transition-all duration-500">{<ContactIcon className='w-7 h-7 drop-shadow-lg  group-hover:fill-[] group-hover:stroke-[#004b86] stroke-[#ffb600]' />}</div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Contact Support</h4>
                            <div className="space-y-4">
                                <p className="">info@metsole.com</p>
                                <p className="">support@metsole.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </SectionLayout>
            {/* <div className="space-y-10">
                <div className="font-semibold text-center space-y-3">
                    <h3 className="text-[#f8955B] uppercase">Join Our Insta</h3>
                    <h2 className="text-4xl">Our Instagram</h2>
                </div>
                <div className='flex items-center justify-center select-none p-10 px-5'>
                    <Swiper className=''
                        modules={[Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 100,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            // you can add more breakpoints if needed
                        }}
                        slidesPerView={5}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 140000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='!w-full md:!w-[33%] relative lg:!w-1/4 xl:!w-[20%] flex items-center justify-center'>
                            <div className="!size-72 group cursor-pointer rounded-2xl overflow-hidden border-black border-solid border">
                                <img src={Slide__Image__1} className='w-full h-full' alt="" />
                                <div className="absolute group-hover:scale-100 scale-0 rounded-2xl duration-500  w-full h-full left-0 top-0 bg-black/10">
                                    {<Instagram className='stroke-white group-hover:bg-[#F8955B] rounded-full size-16 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> */}
        </>
    )
}

export default ContactUs
