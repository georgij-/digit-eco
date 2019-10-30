import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import RadioButtons from './RadioButtons';
function HeroCalculator() {
  return (
    <div className="calculator">
      <h1>Информативна пресметка</h1>
      <p>Пресметајте колку суров материјал за рециклирање е потребен за да се добие еден од следниве прозиводи:</p>
      <TextField
          id="standard-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />
        <br />        <br />

        <RadioButtons />
    </div>
  );
}

export default HeroCalculator;
