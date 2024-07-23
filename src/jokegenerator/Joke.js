import { useEffect, useState } from "react";
import Jokechange from "./Jokechange.js";





function Joke(){


    const [joke,setJoke]=useState("");
  
   
    useEffect(()=>{
          changejoke();
    },[])
   
   
 const changejoke=()=>{

   
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res)=>res.json()).then((data)=>{
    console.log(data);
    
    setJoke(data.joke);
   }).catch((err)=>console.log(err.message));
  
   


   
}

    return(
        <div>
            <h1>Joke Generator application</h1>
            {/* <h1>{joke}</h1>
            <button onClick={changejoke}>change the joke</button> */}
            <Jokechange changedJoke={changejoke}  joker={joke}/>

        </div>
    )
}


export default Joke;
