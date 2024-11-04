import React from 'react'
import { Button } from './ui/button'

const AgencyServicesSingleCard = (props) => {
  return (
    <div className='w-full flex-1 h-[540px] bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden custom_transition6s hover:flex-[2] ' style={{backgroundImage: `url(${props.image})` }}>
        <div className='h-full w-full bg-black/40 custom_transition p-7 group custom_transition6s flex flex-col justify-end'>
            <div className=' overflow-hidden lg:h-0 group-hover:h-full flex flex-col justify-end custom_transition6s gap-3'>
                <p className='text-white max-w-[320px] w-full '>{props.text}</p>
                <Button className='hover:!bg-[#ffb200] !bg-[#004b86]'>{props.button}</Button>
            </div>
        </div>
    </div>
  )
}

export default AgencyServicesSingleCard