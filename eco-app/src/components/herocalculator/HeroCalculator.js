import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import RadioButtons from './RadioButtons';

class HeroCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div className="calculator">
        <h1>Информативна пресметка</h1>
        <p>Пресметајте колку суров материјал за рециклирање е потребен за да се добие еден од следниве прозиводи:</p>
        <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
          <br />        <br />
          <RadioButtons />
          <h1>Ќе добиете</h1>
  
          <span className="calculatorResult"></span>
      </div>
    );
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

}



export default HeroCalculator;
