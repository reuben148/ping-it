import React from "react";
import { Navbar, Card, Button } from "./Components";
import { Features, Hero, Footer } from "./Sections";
import BackgroundImage from "./assets/Background-image.png";

function App() {
  return (
    <div>
      {/* Navbar + Hero with background */}{" "}
      <div
        className="w-[1440px] h-[806px] shrink-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          aspectRatio: "134 / 75",
        }}
      >
        <Navbar />
      </div>
      {/* Other sections */}
      <Hero />
      <Card />
      <Button />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
