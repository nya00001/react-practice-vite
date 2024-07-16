import React, { useState, useEffect } from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}` 
    } , [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function ChangeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>subtract</button>
        <button onClick={ChangeColor}>Change Color</button>
    </>
    )
}

export default UseEffect