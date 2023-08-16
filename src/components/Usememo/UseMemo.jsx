import React, { useMemo, useState } from 'react'
import NewCompoonents from './NewCompoonents'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [words,setWords]=useState("");

    const result=useMemo(function(){
            let sum=0;
            for (let i = 0; i < 100000; i++) {
                sum = i;   // Add the current value of i to the sum
            }
            return sum;
        })

    // console.log(bigDataSum())
    // const result=bigDataSum();

    return (
    <>
    <div>UseMemo</div>
    <h1>{count}</h1>
    <div><button onClick={()=>setCount(count+1)}>Increment</button></div>
    <hr />
    <div>

        <input value={words} onChange={(e)=>setWords(e.target.value)} />
    </div>

<div><h1>Big Data Result = {result}</h1></div>

    <NewCompoonents count={count}/>
    </>
  )
}

export default UseMemo