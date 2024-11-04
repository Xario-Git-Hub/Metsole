import React from 'react'
import { Button } from './ui/button'

const PortfolioSingleCard = (props) => {
  return (
    <div className='flex lg:flex-row flex-col rounded-xl overflow-hidden'>
      <div className="lg:w-1/2 w-full min-h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className="lg:w-1/2 w-full p-8 bg-white">
        <h4 className='text-[#ffb200] custom_transition cursor-default select-none font-semibold text-2xl '>{props.title}</h4>
        <p className='mt-3 mb-4 text-black py-5 line-clamp-4'>{props.heading}</p>
        <Button className='hover:!bg-[#ffb200] !bg-[#004b86]'>
          View Details
        </Button>
      </div>
    </div>
  )
}

export default PortfolioSingleCard