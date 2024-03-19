import React from 'react'
import './Calculator.css'
import { useRef } from 'react'
import { useState } from 'react'

function Calculator() {

    const [display, setDisplay] = useState('0');
    
    const deleteButton = () => display != '0' ? setDisplay(display.slice(0, -1)) : setDisplay('0');
    
    const addChar = (event) => { 
        const value = event.target.innerText;
        
        if (display === '0' || display === 'Syntax/Math error!') {
            setDisplay(value === '()' ? '(' : value);
            return;
        }
    
        if (value !== '()') {
            setDisplay(display + value);
            return;
        }
    
        const isOpenBracketNeeded = display.lastIndexOf('(') <= display.lastIndexOf(')');
    
        setDisplay(display + (isOpenBracketNeeded ? '(' : ')'));
    }
    
    const clearDisplay = () => {
        setDisplay('0');
    }

    const calcDisplay = () => {
        try
        {
            setDisplay(eval(display));
        } catch(error)
        {
            setDisplay('Syntax/Math error!');
        }
    }

    return (
        <section>
            <div id="calculator">
                <div className='container'>
                    <div className="row" id='display'>
                       <p>{display}</p>
                    </div>
                    <div className="row">
                        <button onClick={deleteButton}>Del</button>
                        <button onClick={clearDisplay}>C</button>
                        <button onClick={addChar}>%</button>
                        <button onClick={addChar}>/</button>
                    </div>
                    <div className="row">
                        <button onClick={addChar}>7</button>
                        <button onClick={addChar}>8</button>
                        <button onClick={addChar}>9</button>
                        <button onClick={addChar}>*</button>
                    </div>
                    <div className="row">
                        <button onClick={addChar}>4</button>
                        <button onClick={addChar}>5</button>
                        <button onClick={addChar}>6</button>
                        <button onClick={addChar}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={addChar}>1</button>
                        <button onClick={addChar}>2</button>
                        <button onClick={addChar}>3</button>
                        <button onClick={addChar}>+</button>
                    </div>
                    <div className="row">
                        <button onClick={addChar}>()</button>
                        <button onClick={addChar}>0</button>
                        <button onClick={addChar}>.</button>
                        <button id='equal' onClick={calcDisplay}>=</button>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Calculator