import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats/Stats";
import Classes from "./components/Classes/Classes";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import Trainers from "./components/Trainers/Trainers";
import Shop from "./components/Shop/Shop";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Classes />
      <BMICalculator />
      <Trainers />
      <Shop />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
