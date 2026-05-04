import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SideBanner from "./components/SideBanner/SideBanner";
import Parent from "./Propspassing/Parent";
import Child from "./Propspassing/Child"; 
import Ifelse from "./ConditionalRendering/Ifelse";
import Ternary from "./ConditionalRendering/Ternary";
import MultipleJSX from "./ConditionalRendering/MultipleJSX";
import UseState1 from "./Hooks/UseState1";
import Forms from "./Hooks/forms";


function App() {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <SideBanner /> */}
      {/* <Parent /> */}
      {/* <Ifelse />
      <Ternary />
      <MultipleJSX /> */}
      <UseState1 />
      <Forms />
    </>
  );
}

export default App;
