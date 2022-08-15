import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProAccounts from "./components/ProAccounts";

function App() {
  return (
    <>
      <div className="bg-veryDarkBlue">
        <Header />
        <Hero />
      </div>
      <Features />
      <ProAccounts />
    </>
  );
}

export default App;
