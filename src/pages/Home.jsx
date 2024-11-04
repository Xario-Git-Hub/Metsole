import Svgs from '@/Assets/svgs'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import SpaceMan from '/Images/assets/slider-1-parallax-image-big.png';
import AwardImage from '/Images/assets/award-image-2.jpg';
import AwardImage2 from '/Images/assets/award-image-side.jpg';
import CirclerText from '/Images/assets/rotate-backward-300x300.png';
import ArrowRightUp from '/Images/assets/rotate-forward-300x300.png';
import ToolImg1 from '/Images/assets/tool-img1.png';
import ToolImg2 from '/Images/assets/tool-img2.png';
import ToolImg3 from '/Images/assets/tool-img3.png';
import ToolImg4 from '/Images/assets/tool-img4.png';
import ToolImg5 from '/Images/assets/tool-img5.png';
import ToolImg6 from '/Images/assets/tool-img6.png';
import ToolImg7 from '/Images/assets/tool-img7.png';
import ToolImg8 from '/Images/assets/tool-img8.png';
import groupedImage from '/Images/assets/grouped-image.png';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AgencyServicesSingleCard from '@/components/AgencyServicesSingleCard';
import PortfolioSingleCard from '@/components/PortfolioSingleCard';
import FeaturedSingleCard from '@/components/FeaturedSingleCard';
import { Button } from "@/components/ui/button"
import splitStringUsingRegex from '../utils/splitingUsingRegex'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionLayout from '@/components/SectionLayout/SectionLayout';


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll',
      handleScroll);
  }, []);

  return (
    <>
      <header className='min-h-[120vh] flex items-center relative lg:justify-between justify-center lg:flex-row flex-col overflow-hidden xl:gap-10 lg:gap-2 gap-10 !bg-cover !bg-center !bg-no-repeat p-10' >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fit center"
        >
          <source src={'Video/Background .mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className=" space-y-6 absolute left-0 top-[40%] px-5 hidden md:block">
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

        <Link to='/contact-us' className="hidden md:flex items-center absolute right-0 top-[40%] justify-center flex-col gap-10 cursor-pointer "><p className="rotate-90 text-white w-full p-1">Get In Touch</p><Svgs.EllipsisVertical className={'size-7 fill-[#ffb600]'} /></Link>
      </header>
      <SectionLayout mainHeading={"Your One-Stop Digital Agency for Unstoppable Business Growth."} subHeading={'Boost your brand with MetSole`s innovative digital marketing solutions. We don"t just create digital experiences; we transform businesses by putting people at the core.Our approach is all about understanding your unique needs. This involves in-depth research, brand strategy and positioning, audience identification, and objective setting.Trust MetSole to turn your marketing vision into an impactful reality.'}>
        <div className="flex lg:flex-row flex-col-reverse w-full gap-10">
          <div className="lg:flex-[4] max-w-[calc(100%-7.5rem)]">
            <div className="relative w-full sm:h-[600px] h-[400px]">
              <img src={AwardImage} alt="" className="absolute sm:w-full w-[120%] h-full object-cover rounded-3xl " />
              <img src={AwardImage2} alt="" className="absolute size-60 top-1/2 right-0 translate-x-1/2 bg-white p-4 sm:pr-4 pr-0 object-cover rounded-[30px] " />
              <div className="bg-white absolute -rotate-90 w-[210px] p-4 h-[80px] top-[30px] rounded-full left-[-90px] flex items-end justify-start ">
                <div className="flex items-center gap-2 border-solid border-black border px-3 bg-white p-2 rounded-3xl">
                  <Svgs.Play className={'size-4'} />
                  <p className="uppercase font-light">Watch Intro</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[5] lg:pl-24 pt-10 space-y-10">
            <div className="space-y-2">
              <p className='text-[#ffb600] md:text-base text-sm font-semibold uppercase '>About Us</p>
              <h3 className='font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px] '>Your Partner in Digital Growth</h3>
              <p className='text-[#757575]  z-50 relative md:text-base text-sm'>At MetSole, we are passionate about helping your businesses thrive in the digital age. Let`s partner to elevate your brand and achieve your digital marketing goals.</p>
            </div>
            <div className="flex items-end gap-5">
              <div className="flex-1 space-y-10">
                <div className="grid grid-cols-2 gap-10 ">
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">Global Clients</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">25k</h2>
                    <p className="font-semibold">Successful Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">On Going Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-semibold">50k+</h2>
                    <p className="font-semibold">Branches</p>
                  </div>
                </div>
                <hr className='border-b border-solid  border-black' />
                <Button className='hover:!bg-[#ffb200] !bg-[#004b86]'>About Us</Button>
              </div>
              <div className="size-36 relative sm:flex items-center justify-center hidden">
                <img src={CirclerText} className='w-full h-full absolute left-0 top-0' alt="" />
                <img src={ArrowRightUp} className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout title={'Agency Services'} className={'bg-[#f6f6f6]'} mainHeading={'Innovation, creativity, and results-driven approach. That`s our promise.'} circle subHeading={'At MetSole, we focus on three core pillars to boost your brand: Digital Marketing, Branding, and Web Development. We offer a wide range of services within these categories, including SEO, Google Ads, social media marketing, graphic design, and custom website development, to help businesses achieve their online goals.'}>
        <div className='lg:flex grid sm:grid-cols-2 grid-cols-1 gap-7 flex-wrap custom_transition'>
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-1.jpg' text='we bring your brand’s vision to life through captivating Graphics & Illustration. Our talented designers craft visually stunning graphics that not only catch the eye but also communicate your brand`s message effectively.' button='Graphics & Illustration' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-2.jpg' text='Our web development services help you build a professional and engaging online presence. We offer a wide range of services, including: Custom website development, E-commerce development, WordPress development, Shopify development, Responsive web design, and Web application development' button='Web Development' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-3.jpg' text='Branding is at the heart of what we do. We believe that a strong brand identity is essential for standing out in today`s competitive market. From logo design and color schemes to messaging and brand voice, we ensure every element is cohesive and impactful. With MetSole, your brand doesn’t just get noticed—it becomes memorable, building trust and loyalty with every interaction.' button='Branding' />
          <AgencyServicesSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/04/Service-4.jpg' text='At MetSole, digital marketing is our specialty, and we`re dedicated to helping your business thrive online. We use data-driven strategies to enhance your online visibility, attract more traffic, and convert leads into loyal customers. Our approach is tailored to your specific goals, ensuring that every campaign is optimized for maximum impact and ROI. With MetSole, your digital presence becomes a powerful tool for growth and success.' button='Digital Marketing' />
        </div>

      </SectionLayout>
      <SectionLayout title={'Our Portfolio'} className={'bg-black text-white'} mainHeading={'Business Development & Promotions'}>
        <div className=' flex items-center justify-center'>
          <Swiper className='portfolio__slider'
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1900,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // you can add more breakpoints if needed
            }}
          >
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-01.jpg' title='Digital Marketing' heading='As a results-driven digital marketing agency, we`ve helped clients across various industries achieve their online goals. Explore our portfolio to see how we`ve transformed businesses through innovative digital strategies' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-02.jpg' title='Branding' heading='Explore our branding portfolio to see how we`ve helped clients build powerful and authentic brands. Our approach combines creativity, strategy, and market insights to create lasting impressions.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-03.jpg' title='Web Development' heading='Our team of skilled web developers specializes in creating custom, responsive websites that are both visually stunning and user-friendly. Explore our portfolio to see examples of our web development projects, from simple landing pages to complex e-commerce platforms.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-04.jpg' title='Graphics Illustration' heading='we bring your brand’s vision to life through captivating Graphics & Illustration. Our talented designers craft visually stunning graphics that not only catch the eye but also communicate your brand`s message effectively.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-05.jpg' title='Video Marketing' heading='Video marketing is a powerful tool for engaging your audience and driving conversions. Our video marketing services include: Video editing, Video marketing strategy, Video distribution, and Video analytics.' />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSingleCard image='https://wdtgoat.wpengine.com/wp-content/uploads/2024/03/portfolio-06.jpg' title='Market Research' heading='Continually maintain web-enabled convergence before performance based initiatives. Dramatically network exceptional portals with worldwide.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionLayout>
      <SectionLayout title={'Featured Tools'} className={''} mainHeading={'Special Tools For Business Growth'}>
        <div className='flex items-center justify-center Tools__slider select-none lg:px-0 sm:px-10 pl-2'>
          <Swiper className='custom_transition6s min-h-[540px]'
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              // you can add more breakpoints if needed
            }}
            slidesPerView={3}
            grabCursor={false}
            draggable={false}
            allowTouchMove={false}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
            }}
            speed={1000}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Email Marketing' heading='Our email marketing services help you build and nurture relationships with your customers. We offer a comprehensive range of services, including: Email list building, Email template design, Email content creation, Email automation, and Email analytics' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Video Marketing' heading='Video marketing is a powerful tool for engaging your audience and driving conversions. Our video marketing services include: Video editing, Video marketing strategy, Video distribution, and Video analytics.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Graphic Design' heading='Our graphic design services help you create visually compelling materials that capture attention and communicate your message effectively. We offer a wide range of services, including: Logo design, Branding, Print design, Digital design, Illustration, and infographics.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='UI/UX Design' heading='UI/UX (User Interface/User Experience) design is essential for creating websites and applications that are both visually appealing and easy to use. Our UI/UX design services help you create digital experiences that delight your users and drive conversions.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Lead Capture' heading='Lead capture is a critical step in the sales process. Our lead capture services help you attract and capture qualified leads for your business. We offer a range of strategies, including: Landing pages, Lead magnets, Pop-ups and forms, social media lead generation, and Content marketing.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Email AUtomation' heading='Email automation is a powerful tool for saving time and increasing your marketing efficiency. Our email automation services help you set up automated email workflows to nurture leads, drive sales, and provide exceptional customer service.' />
            </SwiperSlide>
            <SwiperSlide className='custom_transition6s'>
              <FeaturedSingleCard title='Paid Search' heading='Paid search advertising is a powerful way to reach your target audience and drive traffic to your website. Our paid search services include: Google Ads management, Keyword research, Ad copy writing, Bid management, and Campaign tracking and analysis.' />
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionLayout>

      <SectionLayout title={'COMMON QUESTIONS'} className={'bg-[#f6f6f6]'} mainHeading={'About Our Projects & Services'}>
        <Accordion type="single" collapsible className={'space-y-5 bg-[#f6f6f6'}>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-1">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What types of projects do you specialize in? </AccordionTrigger>
            <AccordionContent>We specialize in a wide range of projects, including Digital Marketing Strategies: SEO, Google Ads, Meta Ads, Social Media Marketing, Email Marketing, and Content Marketing. Brand Development: Graphic Design and Packaging Design. Web Development Solutions: Custom websites and platforms such as WordPress, Shopify, Wix, and Magento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-2">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you provide examples of your previous work?
            </AccordionTrigger>
            <AccordionContent>Absolutely! We have a portfolio of successful projects that showcase our expertise. Please visit our portfolio section or contact us for more information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-3">
            <AccordionTrigger className={'font-bold text-xl text-left'}>How do you ensure the quality of your work?
            </AccordionTrigger>
            <AccordionContent>We have a rigorous quality assurance process in place to ensure that our work meets the highest standards. Our team of experienced professionals is dedicated to delivering exceptional results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-4">
            <AccordionTrigger className={'font-bold text-xl text-left'}>How do you measure the success of a digital marketing campaign?
            </AccordionTrigger>
            <AccordionContent>We use a variety of metrics to measure the success of digital marketing campaigns, including website traffic, conversions, engagement, and ROI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-5">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you help me improve my website`s SEO?</AccordionTrigger>
            <AccordionContent>Yes, we can help you improve your website`s SEO through a variety of techniques, such as keyword research, on-page optimization, and link building.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What social media platforms do you specialize in? </AccordionTrigger>
            <AccordionContent>We specialize in a variety of social media platforms, including WhatsApp, Facebook, Instagram, Twitter, LinkedIn, and Snapchat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you help me redesign my logo? </AccordionTrigger>
            <AccordionContent>Yes, we can help you redesign your logo to create a more modern and impactful look.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What is the difference between branding and marketing?</AccordionTrigger>
            <AccordionContent>Branding is about creating a unique identity for your business, while marketing is about promoting your brand and driving sales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you build a custom website for my business?</AccordionTrigger>
            <AccordionContent>Yes, we can build a custom website that is tailored to your specific needs and goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What platforms do you use for web development?</AccordionTrigger>
            <AccordionContent>We are proficient in a variety of platforms, including WordPress, Shopify, Magento, and custom solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you help me improve the user experience of my website? </AccordionTrigger>
            <AccordionContent>Yes, we can help you improve the user experience of your website through user research, wireframing, prototyping, and usability testing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </SectionLayout>
      <SectionLayout title={'Friendly Services'} className={''} mainHeading={'Friendly and Integrated Services'} subHeading={'At MetSole, we’re more than just a digital agency—we’re your growth partner. We integrate seamlessly with tools like Mailchimp, HubSpot, Google Analytics, Dropbox, Amplitude, Slack, Google Tag Manager, and Google Merchant Center to streamline your marketing efforts. Our user-friendly approach ensures that our services are not just effective but also easy to implement and manage.'}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg1} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Google Drive</h5>
              <p className="font-light text-sm">Elevate your business Saas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg2} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Amplitude</h5>
              <p className="font-light text-sm">Accelerate your growth</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg3} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Slack</h5>
              <p className="font-light text-sm">Transform your business</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg4} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Google Analytics</h5>
              <p className="font-light text-sm">Devoted to helping your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg5} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">MailChimp</h5>
              <p className="font-light text-sm">The digital empire your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg6} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Dropbox</h5>
              <p className="font-light text-sm">Innovative solutions for businesses.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg7} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Hub Spot</h5>
              <p className="font-light text-sm">Invest in the future of your business.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-5 rounded-lg border-solid border bg-white hover:bg-slate-50 cursor-pointer">
            <img src={ToolImg8} className='size-16 object-contain' alt="" />
            <div className="space-y-1">
              <h5 className="font-bold text-lg">Power BI</h5>
              <p className="font-light text-sm">Quality software for businesses.</p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <div className="marque__slider bg-[#ffb600] flex items-center w-full h-24">
        <div className="list flex text-center font-bold uppercase md:text-5xl sm:text-3xl text-xl w-full h-full relative max-w-[calc(--width*--quantity] ease-in-out">
          <div className="item h-full flex items-center " style={{ '--position': 1 }}>
            <p className="">
              Fresh Ideas
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 2 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 3 }}>
            <p className="">
              Full-Service
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 4 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 5 }}>
            <p className="">
              Technology
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 6 }}>
            <p className="">
              *
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 7 }}>
            <p className="">
              Cost-Effective
            </p>
          </div>
          <div className="item h-full flex items-center" style={{ '--position': 8 }}>
            <p className="">
              *
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home 
