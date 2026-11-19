// import React from "react";


// function App(){

// function handleClick(){
//   alert('Button Clicked')
// }

// //React Events are wrrite - onEventName for example : onClick , onChange , onSubmit , onKeyup

// return(
//   <div>               
//         <button  onClick={handleClick} >Click Me</button>
//   </div>
// )

// }
// export default App


//example 2 - Live search 
import React, { useState } from "react";
import Btns from "./Buttons";


function App(){

const[text,setText] = useState("")

return(
  <div>               
        <input 
        placeholder="Search ..."
        
        onChange={ (e)=>  setText(e.target.value)     }


        />
        <h3>You Typed : {text}   </h3>

        <Btns />
  </div>
)

}
export default App