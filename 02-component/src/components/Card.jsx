import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profile" />
      <h1>My name is {props.user}</h1>
      <h2>and I am {props.age} years old</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View </button>
    </div>
  )
}
 
export default Card
