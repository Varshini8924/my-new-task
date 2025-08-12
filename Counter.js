import React from "react";
import './Counter.CSS';
import { useState } from 'react'
function Counter() {
    const increment = (()=>
    {
        setCount(count+1)
    }
)
const decrement = ( ()=>
{
    setCount(count-1)

})
const reset= (()=>
{
    setCount(0)
}
)   
 const [count, setCount]= useState(0)
   return(
    <>
   <div className="box">
    <div className="output">Count : {count}</div>
    <div className="btn">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={0}></button>
    </div>
   </div>
    </>
   ) 
}
export default App
