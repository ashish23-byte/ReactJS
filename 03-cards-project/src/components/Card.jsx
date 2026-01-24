import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
          <div>
           <div className="top">
           <img src={props.img} alt="" />
           <button>Save <Bookmark /></button>
         </div>
         <div className="center">
           <h3>{props.user} <span>{props.date} days ago</span></h3>
           <h2>{props.designer}</h2>
           <div className='tag'>
             <h4>{props.time}</h4>
             <h4>{props.level}</h4>
           </div>
         </div>
          </div>
         <div className="footer">
           <div>
               <h3>{props.cost}</h3>
               <p>{props.city}</p>
           </div>
           <button>Apply now</button>
         
         </div>
         </div>
  )
}

export default Card
