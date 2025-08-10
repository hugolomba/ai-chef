/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";


export default function App() {

  const test = React.useState("test")

  console.log(test);

  return (
    <>
    <Header />
   <Main />
    </>
   
  )
}
