import React from 'react'
import Section1 from './components/Section1/section1'



const App = () => {
  const users=[
      {
        img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        color:'royalblue',
        tag:'Satisfied'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
         color:'gray',
        tag:'Underserved'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
         color:'orange',
        tag:'Underbanked'
      },
      {
        img:'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        color:'lightseagreen',
        tag:'Average'
      }
    ]
  return (
    
    <div>
    <Section1 users={users}/>
  
    </div>
  )
}

export default App
