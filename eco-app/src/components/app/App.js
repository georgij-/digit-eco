import React from 'react';
import '../app/App.css';
import Hero from '../hero/Hero';
import HeroText from '../herotext/HeroText';
import HeroCalculator from '../herocalculator/HeroCalculator';

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
        <h1>TEst</h1>
      </div>


    </div>
  );
}

export default App;
