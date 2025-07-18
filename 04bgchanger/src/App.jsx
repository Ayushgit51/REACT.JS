import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen
    " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl'>
          
          <button onClick={()=>{setColor("red")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>{setColor("green")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
          
          <button onClick={()=>{setColor("blue ")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"blue"}}>Blue</button>
          
          <button onClick={()=>{setColor("pink")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"pink"}}>Pink</button>
          
          <button onClick={()=>{setColor("orange")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"orange"}}>Orange</button>

          <button onClick={()=>{setColor("brown")}}
          className='outline-none px-4 py-1 rounded-xl shadow-lg'
          style={{backgroundColor:"brown"}}>Brown</button>
          
         </div>
      </div>
    </div>
  )
}

export default App
