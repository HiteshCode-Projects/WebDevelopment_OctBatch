// import React from "react";

// function App(){

// let count = 0;

// function Increase(){
//   count = count + 1;
//   console.log(count)
// }

//   return(
//     <div>
//       <h2>Cart/Count/Like : {count}    </h2>

//       <button onClick={Increase}>Increase</button>
//     </div>
//   )

// }
// export default App


//Example 2 - React Variable useState
//useState - SPecial React Variable Update the value and aslo Updates the screen as well

//Synatx - const[ mainVariable- Screen , setVariableName-Store Updated Value      ] = useState(Inital Value)

// const[count , setCount ] = useState(0)

// import React, { useState } from "react";

// function App(){

//   const [count , setCount] = useState(11);


// function Increase(){
//     setCount(count+1)
// }

//   return(
//     <div>
//       <h2>Cart/Count/Like : {count}    </h2>

//       <button onClick={Increase}>Increase</button>
//     </div>
//   )

// }
// export default App

//Example 3 - Show and Hide Password
// import React, { useState } from "react";

// function App(){

  
// const [show,setShow] = useState(false)



//   return(
//     <div>
//         <input type={ show ? "text" : "password"}  placeholder="enter password" />

//         <button onClick={ ()=> setShow(!show)    }>Show/Hide</button>
//     </div>
//   )

// }
// export default App

//Example 3- Instagram Follow Button
// import React, { useState } from "react";

// function App(){

// const[isFollow , setIsFollow] = useState(false)

// return(
//   <button onClick={()=>   setIsFollow(!isFollow)   }> { isFollow  ? "Following" : "Follow"  }  </button>
// )

// }
// export default App


//Example 4 -Login / Logout

import React, { useState } from "react";

function App(){



return(
  <button>   </button>
)

}
export default App