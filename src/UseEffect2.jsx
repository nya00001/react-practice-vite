import React, { useState, useEffect } from 'react';

function UseEffect2() {
    const [width ,setwidth ] = useState(window.innerWidth);
    const [height ,setheight ] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);    
        console.log("event listener added")

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("event listener removed")
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize () {
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return ( <>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
    </>

    )

}

export default UseEffect2