// import React from "react";
// import {BrowserRouter , Routes , Route} from "react-router-dom"


// //HOme pAge
// function Home(){
//   return(
//     <h1>Home Page</h1>
//   )
// }

// //About Page
// function About(){
//   return(
//     <h1>About Page</h1>
//   )
// }



// function App(){
//   return(
//    <BrowserRouter>
   
//    <Routes>
//        <Route  path="/"      element={<Home />}   />
//        <Route  path="/about" element={<About />}  />
//    </Routes>


//    </BrowserRouter>
//   )
// }
// export default App


//Example 2 : Navigation through Link
// import React from "react";
// import {BrowserRouter , Routes , Route , Link} from "react-router-dom"


// //HOme pAge
// function Home(){
//   return(
//     <h1>Products  Page</h1>
//   )
// }

// //Cart Page
// function Cart(){
//   return(
//     <h1>Your Cart</h1>
//   )
// }



// function App(){
//   return(
//    <BrowserRouter>

//      <nav>
//       <Link to="/" >Home</Link>  || 
//       <Link to="/cart" >Cart</Link>
//      </nav>

//    <Routes>
//    <Route path="/"    element={<Home />}   />

//    <Route path="/cart"element={<Cart />}   />
//    </Routes>

//    </BrowserRouter>
//   )
// }
// export default App


//Example 3 - Studnet Dashboard
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App(){
  return(
    <BrowserRouter>
    
    <Navbar />

    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/dashboard"  element={<Dashboard />}/>
      <Route path="/profile"  element={<Profile />}/>

    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App