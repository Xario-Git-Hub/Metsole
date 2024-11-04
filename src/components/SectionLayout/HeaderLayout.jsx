import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from 'react-router-dom'
import splitStringUsingRegex from '../../utils/splitingUsingRegex';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1, transition: { duration: 0.5 } },
};

const HeaderLayout = ({ heading, page, bgImage }) => {
    const splitHeading = splitStringUsingRegex(heading);


    // Intersection Observer to trigger animation once
    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures the animation only happens once
        threshold: 0.2,    // Trigger when 20% of the section is visible
    });

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    return (
        <motion.section ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={revealVariants} className='flex items-center justify-center flex-col gap-5 h-96 !bg-cover !bg-center !bg-no-repeat !text-white' style={{ background: 'url(/Images/Contact/Contact.jpg)' }}>
            {/* <h1 className="text-5xl font-semibold">{heading}</h1> */}
            {heading &&
                <motion.h1
                    initial="hidden"
                    animate={inView ? 'reveal' : 'hidden'}
                    transition={{ staggerChildren: 0.02 }}
                    className='text-white font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px]'
                >
                    {splitHeading.map((char, index) => (
                        <motion.span key={index} variants={charVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            }
            <Breadcrumb className={'!text-white'}>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link to={'/'}>
                            <BreadcrumbLink className={'text-white hover:text-[#004b86] font-medium'}>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className={'text-white font-medium'} />
                    <BreadcrumbItem>
                        <BreadcrumbPage className={'text-[#ffb600] font-medium'}>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </motion.section>
    )
}

export default HeaderLayout
