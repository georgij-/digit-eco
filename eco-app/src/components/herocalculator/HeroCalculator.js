import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import '../herocalculator/HeroCalculator.css';
// import RadioButtons from './RadioButtons';

class HeroCalculator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {plasticFactor : 0.2, paperFactor: 0.000017, glassFactor: 25, currentFactor: -1, inputValue: NaN};
    }
    
    render(){
        var value = "";
        var string = "";
        var naslov = " ";
        if(this.state.currentFactor != -1 && !isNaN(this.state.inputValue)){
                    value = this.state.currentFactor * this.state.inputValue;
                    value = parseFloat(value).toFixed(3);
                    if(this.state.currentFactor == "0.2" ) {
                        string += " маици";
                        naslov = "Ќе добиете";
                    }
                    if(this.state.currentFactor == "0.000017") {
                        string += " дрва";
                        naslov = "Ќе спасите";
                    }
                    if(this.state.currentFactor == "25") {
                        string += " минути.";
                        naslov = "Ќе напојувате ";
                        naslov += "еден компјутер за: "
                    }
        }

        return (
        <div className="calculator">
            <h1>Информативна пресметка</h1>
            <p>
                Пресметајте колку и кои прозиводи ќе ги добиете со рециклирање на некој од следниве материјали:
            </p>
            <input className="vrednost-calc" type="text" onChange={(evt) => {
                     this.setState({inputValue: parseFloat(evt.target.value)}); 
            }} />

            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.plasticFactor})}} />Пластика (број на шишиња)</span>
            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.paperFactor})}} />Хартија (килограми)</span>
            <span class="radio-btn"><input type="radio" name="factor" onChange = {(args)=>{this.setState({currentFactor: this.state.glassFactor})}} />Стакло (број на шишиња)</span>
            
            <h1>{naslov}</h1>
                <span className="calculatorResult">{value}{string}</span>
        </div>)
    }

}

export default HeroCalculator;
