import Svgs from '@/Assets/svgs'
import React from 'react'

const FeaturedSingleCard = (props) => {
  return (
    <div className='rounded-2xl border border-black group cursor-grab px-8 py-16 custom_transitions'>
        <Svgs.BigPlus/>
        <h3 className='text-black font-semibold text-3xl mt-6 group-hover:text-[#ffb600] custom_transition '>{props.title}</h3>
        <p className='text-[#757575] text-[17px] mt-7 line-clamp-4'>{props.heading}</p>
    </div>
  )
}

export default FeaturedSingleCard