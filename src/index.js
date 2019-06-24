import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class Calc extends React.Component {
    state = {
        sumSoFar: '',
        valueShow: 0,
        lastButtonType: 'equals'
    }

    createObject = (sumSoFarVal, valueShowVal, lastButtonTypeVal) => {
        return {
            sumSoFar: sumSoFarVal,
            valueShow: this.roundNumber(valueShowVal),
            lastButtonType: lastButtonTypeVal
        }
    }

    equals = () => {
        let answer = eval(this.state.sumSoFar).toString()
        let interum = this.createObject(
            answer,
            answer,
            'equals')
        this.setState({
            sumSoFar: interum.sumSoFar,
            valueShow: interum.valueShow,
            lastButtonType: interum.lastButtonType
        })
    }

    operator = (value) => {
        let interum = this.createObject(
                        this.state.sumSoFar+value,
                        this.state.valueShow,
                        'operator')
        this.setState({
            sumSoFar: interum.sumSoFar,
            valueShow: interum.valueShow,
            lastButtonType: interum.lastButtonType
        })
    }

    clear = () => {
        this.setState({ sumSoFar: '',
                        valueShow: '0',
                        lastButtonType: 'equals'})
    }

    number = (value) => {
        let interum = {}
        if (this.state.lastButtonType === 'equals') {
            interum = this.createObject(value,value,'number')
        }
        else if (this.state.lastButtonType === 'operator') {
            interum = this.createObject(this.state.sumSoFar+value,value,'number')
        }
        else if (this.state.lastButtonType === 'number') {
            interum = this.createObject(this.state.sumSoFar+value,this.state.valueShow+value,'number')
        }
        this.setState({
            sumSoFar: interum.sumSoFar,
            valueShow: interum.valueShow,
            lastButtonType: interum.lastButtonType
        })
    }
    
    roundNumber = (value) => {
        if(value.length > 10) {
            return value.substring(0,14)
        }
        else {
            return value
        }
    }

    render() {
        return (
            <div className="container">
                <h3 className="box answer">{this.state.valueShow}</h3>
                <h3 className="box clear operator" onClick={this.clear}>clear</h3>
                <h3 className="box operator" onClick={() => this.operator('/')}>/</h3>
                <h3 className="box number" onClick={() => this.number('7')}>7</h3>
                <h3 className="box number" onClick={() => this.number('8')}>8</h3>
                <h3 className="box number" onClick={() => this.number('9')}>9</h3>
                <h3 className="box operator" onClick={() => this.operator('*')}>x</h3>
                <h3 className="box number" onClick={() => this.number('4')}>4</h3>
                <h3 className="box number" onClick={() => this.number('5')}>5</h3>
                <h3 className="box number" onClick={() => this.number('6')}>6</h3>
                <h3 className="box operator" onClick={() => this.operator('-')}>-</h3>
                <h3 className="box number" onClick={() => this.number('1')}>1</h3>
                <h3 className="box number" onClick={() => this.number('2')}>2</h3>
                <h3 className="box number" onClick={() => this.number('3')}>3</h3>
                <h3 className="box operator" onClick={() => this.operator('+')}>+</h3>
                <h3 className="box zero" onClick={() => this.number('0')}>0</h3>
                <h3 className="box equals operator" onClick={this.equals}>=</h3>
            </div>
        )
    }
}

ReactDOM.render(<Calc />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
buttonArr.map (buttonVal => {
    return <button name={buttonVal} onClick={e.target.name)}>{buttonVal}</button>
})
Use map on my buttons
Split out my components
*/