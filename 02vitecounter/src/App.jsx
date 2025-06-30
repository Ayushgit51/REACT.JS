import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const addOne = () => {
    if(count < 20)
   setCount(count + 1)
  }

  const subOne = () => {
    if(count > 0)
    setCount(count-1)
  }


  return (
    <>
     <h1>1st react App</h1>
     <h2>Click increament  and dcreament to perform both operations on below counter</h2>
     <h2>Counter : {count}</h2>
     <button onClick={addOne}>Increament : {count}</button>
     <button onClick={subOne}>Decreament : {count}</button>
    </>
  )
}

export default App
