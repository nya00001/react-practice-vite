import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Hajar");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={updateName}>Set Name</button>
            <h1>Age: {age}</h1>
            <button onClick={incrementAge}>Increase Age</button>
            <h1>Employed: {isEmployed ? "Yes" : "No"}</h1>
            <button onClick={toggleEmployedStatus}>Toggle Employed</button>
        </div>
    );
}


export default MyComponent;