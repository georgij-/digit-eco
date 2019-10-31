import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
import HeroMeni from '../meni/HeroMeni';
import FaqPage from '../faqpage/FaqPage';
import ContactPage from '../contactpage/ContactPage';
import logo from '../../assets/images/logo-main.png';


function App() {
  return (
    <Router>
    <div>
      <nav class="main-header">
      <img className="main-logo" src={logo} />
        <ul class="main-menu">
          <li>
            <Link to="/">ДОМА</Link>
          </li>
          <li>
            <Link to="/faq">ЧПП</Link>
          </li>
          <li>
            <Link to="/contactnav">КОНТАКТ</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/contactnav">
          <ContactNav />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

function Home() {
  return (
    
    <div className="app-wrapper">
      
      <div id="hero" className="container">
      {/* <HeroMeni/> */}
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
      <Zoom><Step background={'fourth'}/></Zoom>
      </div>

      <div id="cards" className="container">
      <Fade left><Card heading={'Хартија'} bodyText={'Eден тон рециклирана пластика заштедува 5,774 Kwh енергија, 2,593 нафта и 23 метри кубни простор за депонија. За производство на нови продукти од пластика од рециклирана пластика, потребно е 1/3 од енергијата за производство на нови продукти од сурови материјали.'} /></Fade>
      <Fade left><Card heading={'Стакло'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      <Fade left><Card heading={'Пластика'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      <Fade left><Card heading={'Метал'} bodyText={'Suspendisse id laoreet dolor. Donec congue, quam id ultrices pulvinar, dolor neque placerat nulla, eu vehicula nunc neque vel eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat diam at tempor varius. Proin dapibus erat in nulla varius, eu finibus justo interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ex ut nisi ullamcorper, non ornare nunc porta. Nulla sodales elementum fringilla. Curabitur dui elit, gravida ac iaculis eget, ullamcorper eget ipsum. Nulla justo quam, consequat ut nunc a, vulputate convallis felis.'} /></Fade>
      </div>

      <div id="mapa" className="container">
        <h1>Мапа на центри за рециклирање во Скопје</h1>
        <div className="row">
        <div id="staklo-zeleno" className="legend-item">
            <h6>Стакло</h6>
          </div>
          <div id="metal-crveno" className="legend-item">
          <h6>Метал</h6>
          </div>
          <div id="plastika-zolto" className="legend-item">
          <h6>Пластика</h6>
          </div>
          <div id="hartija-plavo" className="legend-item">
          <h6>Хартија</h6>
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

function Faq() {
  return(
    <div>
      <FaqPage />
    </div>
  );
}

function ContactNav() {
  return(
    <div>
      <ContactPage/>
    </div>
  );
}

export default App;
