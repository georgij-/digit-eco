import React from 'react';
import '../app/App.css';
import Hero from '../hero/Hero';
import HeroText from '../herotext/HeroText';
import HeroCalculator from '../herocalculator/HeroCalculator';
import Card from '../card/Card';
import Step from '../step/Step';
import Contact from '../contact/Contact';
import Mapi from '../mapi/Mapi';

function App() {
  return (
    
    <div className="app-wrapper">
      
      <div id="hero" className="container">
      <img className="main-logo" src="https://img.icons8.com/color/120/000000/recycle-sign.png" />

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

      <div id="mapa" className="container">
        <h1>Мапа на центри за рециклирање во Скопје</h1>
        <Mapi/>
      </div>

      <div id="contact" className="container">
        <Contact/>
      </div>


    </div>
  );
}

export default App;
