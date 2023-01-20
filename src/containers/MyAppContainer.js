import { useState } from "react";
import Counter from "../components/Counter";

const cakes = [

    // Victora Sponge
    {
        name: "Victoria Sponge",
        ingredients: [
             "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5
    },
    
    // Tea Loaf
    {
        name: "Tea Loaf",
          ingredients: [
              "eggs",
             "oil",
             "dried fruit",
             "sugar",
             "self-raising flour",
             "strong tea",
         ],
         price: 2,
         rating: 3
    },
    
    // Carrot Cake
    {
        name: "Carrot Cake",
          ingredients: [
           "carrots",
             "walnuts",
             "oil",
             "cream cheese",
             "flour",
             "sugar",
          ],
          price: 8,
          rating: 5
    }
];


//function
const MyAppContainer = () => {

    //states
    // victoriaCounter () = useState(0)
    // teaCounter () = useState(0)
    // carrotCounter () = useState(0)
    
    const [victoriaCount, setVictoriaCounter] = useState(0);
    const [teaCount, setTeaCounter] = useState(0);
    const [carrotCount, setCarrotCounter] = useState(0);
    
    //components
    return (
        <>
        <h2>Cakes</h2>
        <h3>Average rating: Coming soon</h3>
        <Counter title={cakes[0].name} ingredient={cakes[0].ingredients} price={cakes[0].price} rating={cakes[0].rating} count={victoriaCount} onButtonClick={setVictoriaCounter}/>
        <Counter title={cakes[1].name} ingredient={cakes[1].ingredients} price={cakes[1].price} rating={cakes[1].rating} count={teaCount} onButtonClick={setTeaCounter}/>
        <Counter title={cakes[2].name} ingredient={cakes[2].ingredients} price={cakes[2].price} rating={cakes[2].rating} count={carrotCount} onButtonClick={setCarrotCounter}/>
        <h3>Cakes sold: {victoriaCount + teaCount + carrotCount}</h3>
        </>
    )
}

export default MyAppContainer;