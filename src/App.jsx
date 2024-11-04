import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound'; // 404 Error page
import Layout from './pages/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ServicesDetail from './pages/ServicesDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {


  const servicesData = [
    {
      id: 1,
      title: 'Web Development Service',
      category: 'Web Development',
      image: '/Images/assets/blog-detail-01.jpg',
      showInNav: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/service1',
      features: [
        {
          title: "Responsive Design",
          description: "Ensures the website looks and functions well on all devices."
        },
        {
          title: "SEO Optimization",
          description: "Improves search engine visibility and ranking."
        },
        {
          title: "E-commerce Integration",
          description: "Enables online shopping and payment processing."
        },
      ],
      ctaHeading: "Photography Solution",
      ctadesc: "Mattis molestie a iaculis at. Sagittis eu volutpat odio facilisis mauris. malesuada quis, sagittis ut dui.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'Morbi tristique senectus',
      checkpointsDesc: 'Amet consectetur adipiscing elit duis. Nunc id cursus metus aliquam eleifend.',
      checkpoints: ['Responsive design', 'SEO optimization', 'Custom development'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'Maecenas volutpat blandit aliquam',
      videoDesc: 'Consequat ac felis donec et odio.',
      videoDesc2: 'Viverra maecenas accumsan lacus vel facilisis volutpat est velit.',
      videoDesc3: 'Elementum facilisis leo vel fringilla.',
    },
    {
      id: 2,
      title: 'App Development Service',
      category: 'App Development',
      image: '/Images/assets/blog-detail-02.jpg',
      showInNav: false,
      description: 'Building custom mobile and web applications with smooth user experiences.',
      link: 'https://example.com/service2',
      features: [
        {
          title: "Cross-Platform Development",
          description: "Creating apps for both iOS and Android."
        },
        {
          title: "API Integration",
          description: "Seamless integration with third-party services."
        },
        {
          title: "UI/UX Design",
          description: "Designing intuitive and engaging user interfaces."
        },
      ],
      ctaHeading: "Mobile Solutions",
      ctadesc: "Discover the power of mobile applications to grow your business.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'Effective App Solutions',
      checkpointsDesc: 'Tailored to your business needs with scalability in mind.',
      checkpoints: ['Cross-platform', 'API Integration', 'Custom features'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'Mobile App Development',
      videoDesc: 'Learn how our app solutions can revolutionize your business.',
      videoDesc2: 'Our apps are built for performance and security.',
      videoDesc3: 'We offer full support and maintenance.',
    },
    {
      id: 3,
      title: 'Social Media Marketing Service',
      category: 'Social Media Marketing',
      image: '/Images/assets/blog-detail-03.jpg',
      showInNav: true,
      description: 'Helping businesses grow their online presence through targeted campaigns.',
      link: 'https://example.com/service3',
      features: [
        {
          title: "Campaign Management",
          description: "Handling all aspects of social media campaigns."
        },
        {
          title: "Content Creation",
          description: "Creating engaging content for your audience."
        },
        {
          title: "Analytics & Reporting",
          description: "Tracking performance and refining strategies."
        },
      ],
      ctaHeading: "Boost Your Online Presence",
      ctadesc: "Maximize your reach with tailored social media strategies.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'Targeted Social Media Solutions',
      checkpointsDesc: 'Reach your ideal audience with custom campaigns.',
      checkpoints: ['Campaign management', 'Engaging content', 'Performance tracking'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'Social Media Marketing',
      videoDesc: "We build your brand's identity online.",
      videoDesc2: 'Our marketing solutions are data-driven.',
      videoDesc3: 'We help you grow your community and customer base.',
    },
    {
      id: 4,
      title: 'Web Development Consultation',
      category: 'Web Development',
      image: '/Images/assets/blog-detail-04.jpg',
      showInNav: false,
      description: 'Expert consultation to help you make the best decisions for your web development project.',
      link: 'https://example.com/service4',
      features: [
        {
          title: "Project Scoping",
          description: "Detailed project discussions to understand requirements and goals."
        },
        {
          title: "Technology Recommendations",
          description: "Advice on the best technology stack for your specific needs."
        },
        {
          title: "Strategy Development",
          description: "Create a roadmap for long-term web development success."
        },
      ],
      ctaHeading: "Consultation Solutions",
      ctadesc: "In-depth consultations designed to give you clarity and direction. Our experts analyze your needs and propose tailored strategies.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'Web Consultation Benefits',
      checkpointsDesc: 'Receive expert advice on project planning, development techniques, and long-term strategies.',
      checkpoints: ['Technology insight', 'Development roadmap', 'Personalized strategy'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'In-Depth Consultation Process',
      videoDesc: 'Our consultation process helps you define clear goals and create a development plan that fits your business needs.',
      videoDesc2: 'From project scoping to selecting the right technologies, we guide you every step of the way.',
      videoDesc3: 'Our experts ensure you are equipped with the knowledge needed to make informed decisions.'
    },
    {
      id: 5,
      title: 'App Development Consultation',
      category: 'App Development',
      image: '/Images/assets/blog-detail-05.jpg',
      showInNav: true,
      description: 'Guiding you through the app development process with expert consultation services.',
      link: 'https://example.com/service5',
      features: [
        {
          title: "App Scoping",
          description: "Identifying the core features and functionality for your app."
        },
        {
          title: "UI/UX Recommendations",
          description: "Optimizing app design for user experience."
        },
        {
          title: "Platform Strategy",
          description: "Advice on selecting the right platforms and technologies for your app."
        },
      ],
      ctaHeading: "App Consultation",
      ctadesc: "Ensure your app development is on the right track with our comprehensive consultation services. We help you understand key aspects and provide a step-by-step guide.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'App Development Insights',
      checkpointsDesc: 'Leverage our expertise in mobile app development to ensure a smooth and successful project.',
      checkpoints: ['Feature planning', 'User-centered design', 'Platform advice'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'App Development Consultation',
      videoDesc: 'Our app consultation services help you refine your app’s concept and provide clarity on the best steps forward.',
      videoDesc2: 'We collaborate closely with you to define app objectives, technology options, and development stages.',
      videoDesc3: 'Receive tailored advice to ensure your app meets both user and business requirements.'
    },
    {
      id: 6,
      title: 'Social Media Management',
      category: 'Social Media Marketing',
      image: '/Images/assets/blog-detail-06.jpg',
      showInNav: false,
      description: 'Manage your social media presence and engage with your audience effectively.',
      link: 'https://example.com/service6',
      features: [
        {
          title: "Content Creation",
          description: "Crafting posts, images, and videos that resonate with your audience."
        },
        {
          title: "Engagement Strategies",
          description: "Increasing interactions and building a loyal follower base."
        },
        {
          title: "Platform Optimization",
          description: "Improving profiles to maximize visibility and reach."
        },
      ],
      ctaHeading: "Social Media Solutions",
      ctadesc: "Boost your social media presence with expert management. Engage followers and build your brand.",
      images: ['/Images/assets/home-1-team-01.jpg', '/Images/assets/slider-1-parallax-bg.jpg', '/Images/assets/Service-3.jpg', '/Images/assets/Service-4.jpg'],
      checkpointsHeading: 'Social Media Benefits',
      checkpointsDesc: 'Our management services ensure your social media profiles are always active and engaging.',
      checkpoints: ['Increased engagement', 'Profile optimization', 'Custom content'],
      videoUrl: 'https://www.youtube.com/embed/y1UarPueBBM',
      videoHeading: 'Social Media Management',
      videoDesc: 'Our social media management services focus on growing your online community through thoughtful strategies.',
      videoDesc2: 'We create content that resonates with your audience and implement strategies to improve engagement and reach.',
      videoDesc3: 'Our experts ensure your brand’s voice is consistent across all platforms, attracting and retaining followers.'
    }
  ];


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ErrorBoundary>
        <Layout servicesData={servicesData}/>
        <ScrollToTop />
      </ErrorBoundary>}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-services" element={<OurServices servicesData={servicesData} />} />
        <Route path="our-services/:serviceCategory" element={<ServicesDetail servicesData={servicesData} />} />
        <Route path="faq" element={<Faq />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Error page */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;