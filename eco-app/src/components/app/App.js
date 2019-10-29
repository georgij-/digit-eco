import React from 'react';
import '../app/App.css';
import Hero from '../hero/Hero';
import HeroText from '../herotext/HeroText';
import HeroCalculator from '../herocalculator/HeroCalculator';
import Card from '../card/Card';
import Step from '../step/Step';
import Contact from '../contact/Contact';
import Mapi from '../mapi/Mapi';
import Zoom from 'react-reveal/Zoom';


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
      <Zoom><Step/></Zoom>
      <Zoom><Step/></Zoom>        
      <Zoom><Step/></Zoom>
      </div>

      <div id="cards" className="container">
        <Card heading={'Хартија'} bodyText={'Test Text'} />
        <Card heading={'Стакло'} bodyText={'Test Text1'} />
        <Card heading={'Пластика'} bodyText={'Test Text2'} />
        <Card heading={'Метал'} bodyText={'Test Text3'} />
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
