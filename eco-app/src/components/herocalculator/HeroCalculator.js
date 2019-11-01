import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import RadioButtons from './RadioButtons';

class HeroCalculator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {plasticFactor : 0.2, paperFactor: 0.000017, glassFactor: 25, currentFactor: -1, inputValue: NaN};
    }
    
    render(){
        var value = "";
        if(this.state.currentFactor != -1 && !isNaN(this.state.inputValue)){
                    value = this.state.currentFactor * this.state.inputValue;
                    value.toFixed(2);
        }

        return (<div className="calculator">
            <h1>Информативна пресметка</h1>
            <p>Пресметајте колку суров материјал за рециклирање е потребен за да се добие еден од следниве прозиводи:</p>
            <input type="text" onChange={(evt) => {
                     this.setState({inputValue: parseInt(evt.target.value)}); 
            }} />

            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.plasticFactor})}} />Пластика (број на шишиња)</span>
            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.paperFactor})}} />Хартија (килограми)</span>
            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.glassFactor})}} />Стакло (број на шишиња)</span>
            
            <h1>Ќе добиете</h1>
                <span className="calculatorResult">{value}</span>
      </div>)
    }

}

export default HeroCalculator;
