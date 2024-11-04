import Svgs from "@/Assets/svgs";
import splitStringUsingRegex from '../../utils/splitingUsingRegex';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1, transition: { duration: 0.5 } },
};

const SectionLayout = ({ className, title, mainHeading, circle, triangle, subHeading, children }) => {
    const splitTitle = splitStringUsingRegex(title);
    const splitHeading = splitStringUsingRegex(mainHeading);
    const splitSubHeading = splitStringUsingRegex(subHeading);

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
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={revealVariants}
            className={`px-5 md:py-28 sm:py-16 py-10 md:space-y-20 sm:space-y-16 space-y-10 ${className ? className : ''}`}
        >
            <div className='flex items-center md:gap-14 gap-5 lg:flex-row flex-col'>
                <div className='flex-1'>
                    {title &&
                        <motion.p
                            initial="hidden"
                            animate={inView ? 'reveal' : 'hidden'}
                            transition={{ staggerChildren: 0.02 }}
                            className='text-[#ffb600] md:text-base text-sm font-semibold uppercase'
                        >
                            {splitTitle.map((char, index) => (
                                <motion.span key={index} variants={charVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.p>
                    }
                    {mainHeading &&
                        <motion.h3
                            initial="hidden"
                            animate={inView ? 'reveal' : 'hidden'}
                            transition={{ staggerChildren: 0.02 }}
                            className='text-[#004a86] font-semibold md:text-[40px] sm:text-3xl text-2xl mt-3 md:leading-[54px]'
                        >
                            {splitHeading.map((char, index) => (
                                <motion.span key={index} variants={charVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h3>
                    }
                </div>
                <div className='flex-1 relative'>
                    {circle &&
                        <div className='lg:flex items-center justify-center absolute -top-10 w-full z-0 hidden'>
                            <div className='rounded-full bg-[#eeeeee] h-[170px] w-[170px]'></div>
                        </div>
                    }
                    {subHeading &&
                        <div className="flex !items-start flex-1 gap-3" style={{ alignItems: "flex-start" }}>
                            <Svgs.Play className={'fill-[#fae951] size-28 h-[2rem] -rotate-[30deg]'} />
                            <motion.p
                                initial="hidden"
                                animate={inView ? 'reveal' : 'hidden'}
                                transition={{ staggerChildren: 0.02 }}
                                className='text-[#757575] z-50 relative md:text-base text-sm'
                            >
                                {splitSubHeading.map((char, index) => (
                                    <motion.span key={index} variants={charVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </div>
                    }
                </div>
            </div>
            {children}
        </motion.section>
    );
};

export default SectionLayout;
