import HeaderLayout from '@/components/SectionLayout/HeaderLayout'
import SectionLayout from '@/components/SectionLayout/SectionLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faq = () => {
  return (
    <div>
      <HeaderLayout heading={'Faqs'} page={'Faqs'} />
      <SectionLayout title={'COMMON QUESTIONS'} className={'bg-[#f6f6f6]'} mainHeading={'About Our Projects & Services'}>
        <Accordion type="single" collapsible className={'space-y-5 bg-[#f6f6f6'}>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-1">
            <AccordionTrigger className={'font-bold text-xl text-left'}>What types of projects do you specialize in?</AccordionTrigger>
            <AccordionContent>
              We specialize in a wide range of projects, including Digital Marketing Strategies: SEO, Google Ads, Meta Ads, Social Media Marketing, Email Marketing, and Content Marketing. Brand Development: Graphic Design and Packaging Design. Web Development Solutions: Custom websites and platforms such as WordPress, Shopify, Wix, and Magento.
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
            <AccordionTrigger className={'font-bold text-xl text-left'}>What Kind Of Marketing Techniques Do You Follow?</AccordionTrigger>
            <AccordionContent>
              Fringilla est ullamcorper eget nulla. Enim sed faucibus turpis in eu mi. Nibh tellus molestie nunc non blandit massa enim nec. Eros donec ac odio tempor orci dapibus ultrices. At augue eget arcu dictum varius duis at.Morbi leo urna molestie at. Egestas diam in arcu cursus euismod quis viverra bibendum arcu vitae nibh.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className={'px-5 py-2 border-black border rounded-lg'} value="item-6">
            <AccordionTrigger className={'font-bold text-xl text-left'}>Can you help me improve my website`s SEO?</AccordionTrigger>
            <AccordionContent>Yes, we can help you improve your website`s SEO through a variety of techniques, such as keyword research, on-page optimization, and link building.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </SectionLayout>
    </div>
  )
}

export default Faq
