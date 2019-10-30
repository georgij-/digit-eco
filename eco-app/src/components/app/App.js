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
import Fade from 'react-reveal/Fade';
import ButtonContact from '../contact/ButtonContact';


function App() {
  return (
    
    <div className="app-wrapper">
      
      <div id="hero" className="container">
      <img className="main-logo" src="https://img.icons8.com/color/120/000000/recycle-sign.png" />
      <h4 className="main-logo-text">Recycle 'N' GO</h4>
      <Hero
      left={
        <HeroText />
      }
      right={
        <HeroCalculator />
      } />
      </div>

      <div id="steps" className="container">
      <Zoom><Step background={'first'}/></Zoom>
      <Zoom><Step background={'second'}/></Zoom>        
      <Zoom><Step background={'third'}/></Zoom>
      </div>

      <div id="cards" className="container">
        
      <Fade left><Card heading={'Хартија'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      <Fade left><Card heading={'Стакло'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      <Fade left><Card heading={'Пластика'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      <Fade left><Card heading={'Метал'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      </div>

      <div id="mapa" className="container">
        <h1>Мапа на центри за рециклирање во Скопје</h1>
        <div className="row">
          <div className="legend-item">
            <h6>Staklo proba</h6>
          </div>
          <div className="legend-item">
          <h6>Staklo proba</h6>
          </div>
          <div className="legend-item">
          <h6>Staklo proba</h6>
          </div>
          <div className="legend-item">
          <h6>Staklo proba</h6>
          </div>
        </div>
        <Mapi/>
      </div>

      <div id="contact" className="container-contact">
        <Contact/>
        <ButtonContact/>
      </div>


    </div>
  );
}

export default App;
