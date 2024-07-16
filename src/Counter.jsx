import React, { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1); 
        setCount(count => count + 1); 
        setCount(count => count + 1); 
    } 

    const decrement = () => setCount(count - 1);

    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <h1 className='counter-display'>Count: {count}</h1>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={decrement}>decrement</button>
        </div>
    );
}

export default Counter