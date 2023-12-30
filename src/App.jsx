import { useState } from 'react'



function App() {
  let [num, setNum]= useState(0)
  const addNum= ()=>{
    setNum(num+1)
  }
  const subNum= ()=>{
  if(num ===0){
    alert("counter is at zero")
    return
  }
    setNum(num - 1)

  }
  
  return (
    <>
     <h1>Hello React</h1>
     <h2>Number: {num}</h2>
     <button onClick={addNum}>Add</button>
     <button onClick={subNum}>Sub</button>
    </>
  )
}

export default App
