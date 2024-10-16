import React, {useState} from 'react';
import './App.scss';

function App() {
  const [display, setDisplay] = useState('0');
  const [answer, setAnswer] = useState('');


  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };
    
  const handleOperator = (event) => {
    const operator = event.target.textContent;
   
    if (display.slice(-1) === '+' || display.slice(-1) === '*' || display.slice(-1) === '/' || display.slice(-1) === '-') {
      setDisplay(display.slice(0, -1) + operator);
    } else if(
      display === '0' && operator === '-'){
      setDisplay(operator);
    }
    else {
      setDisplay(display + ' ' + operator + ' ');
    }

    };

  const handleClear = () => {
    setDisplay('0');
    setAnswer('');
  };

  const handleEquals = () => {
    try {
      const result = eval(display); 
      setAnswer(result.toString());
    } catch (error) {
      setAnswer('Error');
    }
  };

  const handleDecimal = () => {
     const array = display.split(/[\+\-\*\/]/);
      const lastNumber = array[array.length - 1];
      if (!lastNumber.includes('.')) {
        setDisplay(display + '.');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="calculator">
      <div className="display" id="display">
        <div id="answer">{answer}</div>
        <div id="formula">{display}</div>
      </div>
      <Buttons numbers={handleNumber} operators={handleOperator} clear={handleClear} equals={handleEquals} decimal={handleDecimal}/>
      </div>
      </header>
    </div>
  );
}

function Numbers(props){
  return(
    <button id={props.digit} className='number' onClick={props.function}>{props.number}</button>
  )
};

function Operator(props){
  return(
    <button id={props.operator} className='operator' onClick={props.function}>{props.symbol}</button>
  )
}

function Buttons(props){

  
  return(
    <>
      <div className="col">
        <button id='clear' className='clearbutton' onClick={props.clear}>C</button>
        <Operator operator='divide' symbol='/' function={props.operators}/>
        <Operator operator='multiply' symbol='*' function={props.operators}/>
      </div>

      <div className="col">
        <Numbers digit='seven' number='7' function={props.numbers}/>
        <Numbers digit='eight' number='8' function={props.numbers}/>
        <Numbers digit='nine' number='9' function={props.numbers}/>
        <Operator operator='subtract' symbol='-' function={props.operators}/>
      </div>

      <div className="col">
        <Numbers digit='four' number='4' function={props.numbers}/>
        <Numbers digit='five' number='5' function={props.numbers}/>
        <Numbers digit='six' number='6' function={props.numbers}/>
        <Operator operator='add' symbol='+' function={props.operators}/>
      </div>

      <div className="col">
        <Numbers digit='one' number='1'  function={props.numbers}/>
        <Numbers digit='two' number='2'  function={props.numbers}/>
        <Numbers digit='three' number='3' function={props.numbers}/>
        <Operator operator='decimal' symbol='.' function={props.decimal}/>
      </div>
     

      <div className="col">
        <button id='zero' className='number zerobutton' onClick={props.numbers}>0</button>
        <button id='equals' className='equalsbutton' onClick={props.equals}>=</button>
      </div>
    </>
  )
}
export default App;
