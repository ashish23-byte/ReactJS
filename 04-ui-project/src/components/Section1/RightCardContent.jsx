import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
      <div>
      <p className='text-shadow-2xs text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora adipisci earum voluptas, ipsa qui?</p>
       <div className='flex items-center gap-4'>
        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
        <button style={{backgroundColor:props.color}} className=' text-white p-3 rounded-full'><ArrowRight /></button>
       </div>
     </div>
    </div>
  )
}

export default RightCardContent
