import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className="bg-veryDarkBlue">
        <Header />
        <Hero />
      </div>
      <Features />
    </>
  );
}

export default App;
