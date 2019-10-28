import React from 'react';
import HeroCalculator from '../herocalculator/HeroCalculator';


function HeroText() {
  return (
    <div className="hero-text">
      <h2>РЕЦИКЛИРАЊЕТО НЕ БИЛО НИКОГАШ ПОЛЕСНО</h2>
      <p>
      Информирајте се како лесно и ефикасно да рециклирате.
		Со минимален труд да допринесете повеќе за вас и вашата околина.
		Проверете колку вреди вашиот труд
      </p>
    <HeroCalculator />
    </div>
  );
}

export default HeroText;
