import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProAccounts from "./components/ProAccounts";
import Card from "./components/Card";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading ? (
        <HashLoader color={"#000000"} loading={isLoading} size={40} />
      ) : (
        <div>
          <Header />
          <Hero />
          <Features />
          <ProAccounts />
          <Card />
        </div>
      )}
    </div>
  );
}

export default App;
