
const Counter = ({title, ingredients, price, rating, onButtonClick}) => {

    //add cake
    const handleAddCake = () => {
        
    }

    //remove cake
    const handleRemoveCake = () => {
        
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