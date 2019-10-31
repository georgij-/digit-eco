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



function App() {
  return (
    <Router>
    <div>
      <nav class="main-header">
      <img className="main-logo" src="https://img.icons8.com/color/120/000000/recycle-sign.png" />
      <h4 className="main-logo-text">Recycle 'N' GO</h4>
        <ul class="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/contactnav">Contact</Link>
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
      </div>

      <div id="cards" className="container">
      <Fade left><Card heading={'Хартија'} bodyText={'Рециклирање на еден тон хартија зачувува 17 дрва. Само 1/3 од целокупното производство на хартија се прави од рециклирана хартија. Секоја година 4 билиони дрва се сечат за да се направи хартија (тоа е 1% од дождовната шума Амазон). 5 литри се трошат за секој А4 лист да биде направен.'} /></Fade>
      <Fade left><Card heading={'Стакло'} bodyText={'Стаклото може да се рециклира во целост бесконечно многу пати без да изгуби на квалитетот. За секој тон рециклирано стакло се зачувува 246 килограми од CO2 емисии. Потребен е еден тон стакло за да се произведат 4,000 шишиња или тегли.'} /></Fade>
      <Fade left><Card heading={'Пластика'} bodyText={'Eден тон рециклирана пластика заштедува 5,774 Kwh енергија, 2,593 нафта и 23 метри кубни простор за депонија. За производство на нови продукти од пластика од рециклирана пластика, потребно е 1/3 од енергијата за производство на нови продукти од сурови материјали.'} /></Fade>
      <Fade left><Card heading={'Метал'} bodyText={'Рециклирање лименки користи 90% помалце енергија, отколку правење нови лименки од сурови материјали. Многу контенери за транспорт се направени од рециклиран метал. Еден лап топ во просек има 1.5 килограми бакар, додека еден дом има 100 килограми.'} /></Fade>
      </div>

      <div id="mapa" className="container">
        <h1>Мапа на центри за рециклирање во Скопје</h1>
        <div className="row">
        <div id="staklo-zeleno" className="legend-item">
            <h6>Staklo proba</h6>
          </div>
          <div id="metal-crveno" className="legend-item">
          <h6>Metal proba</h6>
          </div>
          <div id="plastika-zolto" className="legend-item">
          <h6>Plastika proba</h6>
          </div>
          <div id="hartija-plavo" className="legend-item">
          <h6>Hartija proba</h6>
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
