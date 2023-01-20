
const Counter = ({title, ingredients, price, rating, onButtonClick, count}) => {

    //add cake
    const handleAddCake = () => {
        onButtonClick(count + 1);
    }

    //remove cake
    const handleRemoveCake = () => {
        if (count > 0){
            onButtonClick(count - 1);
        }
    }

    //return counters
    return(
        <>
            <h2>Cake {title}</h2>
            <p>Ingredients: {ingredients}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <button onClick={handleAddCake}>Add</button>
            <button onClick={handleRemoveCake}>Remove</button>
    </>
    )
}

export default Counter;