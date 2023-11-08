import './App.css';
import {useState} from 'react';

function App() {

  const [inputVal, setInputVal] = useState('');
  
  function calculate(){
    const conditions = ["-", "+", "*","/"];
    conditions.filter((el) => {
      if(inputVal.includes(el)){
        let splitArr = inputVal.split(el);
        const sum = () => {
          switch(el) {
          case '-':
            return splitArr[0] - splitArr[1];
          case '+':
          return Number(splitArr[0]) + Number(splitArr[1]);
          case '*':
          return splitArr[0] * splitArr[1];
          case '/':
          return splitArr[0] / splitArr[1];
          default:
            return '';
        }
      }
        setInputVal(sum);
        }
        return false;
      });
  }

  const concatInput = (val) => {
    setInputVal(inputVal+val)
  }

  return (
    <div className="App">
      <section>
      <div>
        <button onClick={(e)=>concatInput(e.target.value)} value="1">1</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="2">2</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="3">3</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="+">+</button>
      </div>
        <div>
        <button  onClick={(e)=>concatInput(e.target.value)} value="4">4</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="5">5</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="6">6</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="-">-</button>
        </div>
        <div>
        <button onClick={(e)=>concatInput(e.target.value)} value="7">7</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="8">8</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="9">9</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="*">*</button>
        </div>
        <div>
        <button onClick={()=>{setInputVal('')}}>C</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="0">0</button>
        <button onClick={calculate}>=</button>
        <button onClick={(e)=>concatInput(e.target.value)} value="/">/</button>
        </div>
      {/*<button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>*/}
      </section>
      <section>
        <input type="text" value={inputVal} readOnly/>
      </section>
    </div>
  );
}

export default App;
