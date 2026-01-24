import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'


const App = () => {
  return (
    <div className="parent">
     <Card user='Ashish' age={21} img='https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'/>
     <Card user='Atish' age={22} img='https://www.shutterstock.com/image-photo/sad-man-feeling-lonely-sitting-260nw-1143224579.jpg'/>
     <Card user='Ayush' age={20} img='https://img.freepik.com/premium-photo/man-alone-beach-watching-sunset_841677-69.jpg'/>
    </div>
  )
}

export default App
