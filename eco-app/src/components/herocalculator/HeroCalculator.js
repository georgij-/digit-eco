import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import RadioButtons from './RadioButtons';

function HeroCalculator() {
  const [input, setInput] = useState(''); // '' is the initial state value

    return (
      <div className="calculator">
        <h1>Информативна пресметка</h1>
        <p>Пресметајте колку суров материјал за рециклирање е потребен за да се добие еден од следниве прозиводи:</p>
        <input type="text" onChange={(evt) => { console.log(evt.target.value); }} />
        <span class="radio-btn"><input value={input} onInput={e => setInput(e.target.value)} type="radio"/>Пластика</span>
        <span class="radio-btn"><input type="radio" />Хартија</span>
        <span class="radio-btn"><input type="radio" />Стакло</span>

        <h1>Ќе добиете</h1>
         <span className="calculatorResult"></span>
      </div>
    );
}


export default HeroCalculator;
