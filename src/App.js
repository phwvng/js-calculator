import React, {useState} from 'react';
import './App.scss';

function App() {
  const [display, setDisplay] = useState('0');
  return (
    <div className="App">
      <header className="App-header">
      <div className="calculator">
      <div className="display">
        <div id="display">{display}</div>
      </div>
      <Buttons function={setDisplay} />
      </div>


      </header>
    </div>
  );
}

function Numbers(props){
  return(
    <button id={props.digit} className='number'>{props.number}</button>
  )
};

function Operator(props){
  return(
    <button id={props.operator} className='operator'>{props.symbol}</button>
  )
}

function Buttons(props){

  
  return(
    <>
      <div className="col">
        <button id='clear' className='clearbutton'>C</button>
        <Operator operator='divide' symbol='/'/>
        <Operator operator='multiply' symbol='x'/>
      </div>

      <div className="col">
        <Numbers digit='seven' number='7'/>
        <Numbers digit='eight' number='8'/>
        <Numbers digit='nine' number='9'/>
        <Operator operator='subtract' symbol='-'/>
      </div>

      <div className="col">
        <Numbers digit='four' number='4'/>
        <Numbers digit='five' number='5'/>
        <Numbers digit='six' number='6'/>
        <Operator operator='add' symbol='+'/>
      </div>

      <div className="col">
        <Numbers digit='one' number='1' />
        <Numbers digit='two' number='2' />
        <Numbers digit='three' number='3'/>
        <Operator operator='decimal' symbol='.'/>
      </div>
     

      <div className="col">
        <button id='zero' className='number zerobutton'>0</button>
        <button id='equals' className='equalsbutton'>=</button>
      </div>
    </>
  )
}
export default App;
