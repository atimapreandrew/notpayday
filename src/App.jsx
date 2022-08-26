import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProAccounts from "./components/ProAccounts";
import Card from "./components/Card";
import SendGetPaid from "./components/SendGetPaid";
import Cta from "./components/Cta";
import Featured from "./components/Featured";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen">
      {isLoading ? (
        <ClipLoader color={"#000000"} loading={isLoading} size={50} />
      ) : (
        <div>
          <div className="bg-veryDarkBlue">
            <Header />
            <Hero />
          </div>
          <Features />
          <ProAccounts />
          <Card />
          <SendGetPaid />
          <Cta />
          <Featured />
        </div>
      )}
    </div>
  );
}

export default App;
