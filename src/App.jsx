import React from "react";
import { Navbar, Card, Button } from "./Components";
import { Features, Hero, Footer } from "./Sections";
import BackgroundImage from "./assets/Background-image.png";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Background with Navbar */}
      <div
        className="relative w-full h-[806px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          aspectRatio: "134 / 75",
        }}
      >
        <Navbar />
      </div>

      {/* Hero overlaps background */}
      <div className="relative -mt-40 z-10">
        <Hero />
      </div>

      {/* Rest of sections */}
      <Card />
      <Button />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
