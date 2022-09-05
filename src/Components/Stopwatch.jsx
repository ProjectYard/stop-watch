import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState("00");
    function startHandler(){
        const d = new Date();
        let tm = d.getTime();
        setTime(tm);
    }

    // Useeffect
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setTime(setCount((count) => count + 1));
        }, 1);
    });
  return (

    <div>
        <h3>{count}</h3>
        <h3>{time}</h3>
        <button onClick={startHandler}>Start</button>
        <button>End</button>
    </div>
  )
}

export default Stopwatch