import React,{useState} from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')

  const [task,setTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    
   const copyTask=[...task]

   copyTask.push({title,details})
   setTask(copyTask)
    setTitle('')
    setDetails('')
  }
 
  const deleteNote =(idx)=>{
    const copyTask=[...task]

    copyTask.splice(idx,1)

    setTask(copyTask)
  }
 

  return (
    <div className='h-screen lg:flex bg-black text-white'>
  <div className="p-8 flex items-center gap-4 lg:w-1/6 border-b lg:border-b-0 lg:border-r border-zinc-700">
  <img
    className="h-32 w-32 rounded-full border border-zinc-500 object-cover"
    src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
    alt=""
  />
  <h1 className="text-2xl font-semibold tracking-wide">Write Notes</h1>
</div>

      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col lg:w-2/6 gap-4 items-start p-10'>
      <h1 className="text-2xl font-semibold tracking-wide">Add Notes</h1>


       <input type="text" placeholder='Enter Notes Heading' className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
       
       value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
       />
      

     <textarea type="text" placeholder='Write Details' className='px-5 h-32 font-medium outline-none w-full py-2 border-2 rounded'
     
     value={details}
     onChange={(e)=>{
      setDetails(e.target.value)
     }}

     />
     <button className='bg-white active:bg-black text-black px-5 py-2 outline-none font-medium w-full rounded'>Add Notes</button>
    
       </form> 
       <div className='lg:w-1/2 lg:border-l-2 p-10 border-zinc-700'>
       <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){
           
           return <div key={idx} className="relative h-52 w-40 bg-cover rounded-2xl text-black py-9 px-4 bg-[url('https://clipart-library.com/images/BcgrBMoKi.jpg')]" >
            <h2 onClick={()=>{
              deleteNote(idx)
            }}
            className='absolute top-5 p-1 right-2 bg-red-500 rounded-full text-xs cursor-pointer active:scale-105'>
              <X size={16} color="#ffffff" strokeWidth={2.75} />
              </h2>
            <h3 className='leading-tight text-lg font-bold mt-2 ml-4'>{elem.title}</h3>
            <p className='leading-tight text-xs font-semibold mt-3 text-gray-600 ml-4'>{elem.details}</p>
           </div>
        })}
        
        

        </div>
       </div>
    </div>
    
   
  )
}

export default App
