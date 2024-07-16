import PropTypes from 'prop-types';

function List (props) {

    const itemList = props.items;

    const category = props.category;
    
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical

    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical

    //fruits.sort((a, b) => a.calories - b.calories); //numeric

    //fruits.sort((a, b) => b.calories - a.calories); //reverse numeric

    //const lowCalFruits = fruits.filter (fruit => fruit.calories < 100);

    //const highCalFruits = fruits.filter (fruit => fruit.calories > 100)


    const listItems = itemList.map (item => <li key={item.id}>{item.name}; &nbsp; <b>Calories:</b> {item.calories}</li>); 

    return (
    <>    
        <h3 className="category">{category}</h3>
        <ol className="list">{listItems}</ol>
    </>
    );
}

List.prototypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })).isRequired,
}

List.defaultProps = {
    category: "Category",
    items : [],
}

export default List