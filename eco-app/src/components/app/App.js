import React from 'react';
import '../app/App.css';
import Hero from '../hero/Hero';
import HeroText from '../herotext/HeroText';
import HeroCalculator from '../herocalculator/HeroCalculator';
import Card from '../card/Card';
import Step from '../step/Step';
import Map from '../map/Map';
import Contact from '../contact/Contact';

function App() {
  return (
    
    <div className="app-wrapper">
      
      <div id="hero" className="container">
      <Hero
      left={
        <HeroText />
      }
      right={
        <HeroCalculator />
      } />
      </div>

      <div id="steps" className="container">
        <Step/>
        <Step/>
        <Step/>
      </div>

      <div id="cards" className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div id="map" className="container">
        <Map/>
      </div>

      <div id="contact" className="container">
        <Contact/>
      </div>


    </div>
  );
}

export default App;
