import React from 'react'
import './Calculator.css'

function Calculator() {
    return (
        <section>
            <div id="calculator">
                <div className='container'>
                    <div className="row" id='display'>
                       <p>asdf</p>
                    </div>
                    <div className="row">
                        <button>Del</button>
                        <button>C</button>
                        <button>%</button>
                        <button>/</button>
                    </div>
                    <div className="row">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>x</button>
                    </div>
                    <div className="row">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                    </div>
                    <div className="row">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>+</button>
                    </div>
                    <div className="row">
                        <button>+/-</button>
                        <button>0</button>
                        <button>.</button>
                        <button id='equal'>=</button>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Calculator