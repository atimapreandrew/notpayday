import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProAccounts from "./components/ProAccounts";
import Card from "./components/Card";
import SendGetPaid from "./components/SendGetPaid";
import Cta from "./components/Cta";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen">
      {isLoading ? (
        <ClipLoader
          color={"#000000"}
          loading={isLoading}
          cssOverride={{ borderWidth: "4px" }}
          size={60}
        />
      ) : (
        <div>
          <div className="bg-veryDarkBlue">
            <Nav />
            <Hero />
          </div>
          <Features />
          <ProAccounts />
          <Card />
          <SendGetPaid />
          <Cta />
          <Featured />
          <div className="bg-veryDarkBlue">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
