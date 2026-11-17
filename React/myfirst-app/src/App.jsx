import React from "react";
import AddToCart from "./Addtocart";


function App(){
  //JsCode

  let name = "John"

  

  return(
    // HTML Code
    <div>
     <h2>My Name is {name}  </h2>
     <AddToCart />
     <h1>Welcome To React</h1>
     <p>Hello Guys</p>
     <AddToCart />
     <input placeholder="Enter your Name"  />

     <AddToCart />
     <AddToCart />
    </div>
  )
}

export default App