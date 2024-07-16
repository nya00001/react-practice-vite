import React, { useState } from "react";

function MyComponent3() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function addFood() {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";

        setFoods(f => [...f, newFood]);
        
    }

    function removeFood(index) {
        setFoods(foods.filter ((_, i) => i !== index));
    }

    return (
        <div>
            <h1>Foods</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>
                                                {food}
                                            </li>)}
            </ul>
            <input type="text" id="food-input" placeholder="Enter food" />
            <button onClick={addFood}>Add Food</button> 
        </div>
    );
}

export default MyComponent3