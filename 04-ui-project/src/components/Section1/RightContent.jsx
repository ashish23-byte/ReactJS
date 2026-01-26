import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto rounded-4xl gap-10 p-4 w-2/3 '>
      {props.users.map(function(elem,idx){
        
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
