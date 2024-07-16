import React, { useState } from 'react';

function MyComponent2() {

    const [car ,seCar] = useState({year: 2010, make: "Toyota", model: "Camry"});

    function handleYearChange(event) {
        seCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        seCar(c => ({...c, make: event.target.value}));
    }   

    function handleModelChange(event) { 
        seCar(c => ({...c, model: event.target.value}));
    }

    return (    
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}

export default MyComponent2;
