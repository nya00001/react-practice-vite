function Food(){

    const food1 = "Pizza";
    const food2 = "Banana";

        return(
            <ul>
                <li>Apple</li>
                <li>{food1.toUpperCase()}</li>
                <li>Curry</li>
                <li>{food2}</li>
            </ul>
    );
}

export default Food