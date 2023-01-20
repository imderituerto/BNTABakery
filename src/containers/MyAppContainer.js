import { useState } from "react";
import Counter from "../components/Counter";

//function
const MyAppContainer = () => {

    //states
    // victoriaCounter () = useState(0)
    // teaCounter () = useState(0)
    // carrotCounter () = useState(0)
    
    const [victoriaCounter, setVictoriaCounter] = useState(0);
    const [teaCounter, setTeaCounter] = useState(0);
    const [carrotCounter, setCarrotCounter] = useState(0);
    
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    //components
    return (
        <>
        <h2>Cakes</h2>
        <h3>Average rating: Coming soon</h3>
        <Counter title="Victoria sponge" onButtonClick={victoriaCounter}/>
        <Counter title="Tea loaf" onButtonClick={teaCounter}/>
        <Counter title="Carrot cake" onButtonClick={carrotCounter}/>
        <h3>Cakes sold: Coming soon</h3>
        </>
    )

}

export default MyAppContainer;