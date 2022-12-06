import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [max,setMax]=useState(1)
  const[reset,setReset]=useState(false)
  const [allMaxValue, setAllMaxValue] = useState(1)

function handelMax(e){
  setMax(Number(e.target.value))
}
function handleDelta(e){
  setDelta(Number(e.target.value))
   }

function getReset(data){
  console.log(data)
  setReset(data)
  
}

function getAllMax(data){
  console.log(data)
  if(data > allMaxValue){
    setAllMaxValue(data)
  }
  else{
    setAllMaxValue(allMaxValue)
  }
}
  return (
    <div className="App">
      useState <br/>
      enter max value<input type = "number" value={max} onChange={handelMax}/>
      <br/>
      enter delta<input type = "number" value={delta} onChange={handleDelta}/>
      <label>Maximum value {allMaxValue}</label>
      <Counter delta = {delta} max={max} getReset={getReset} needToReset={reset} getAllMax = {getAllMax}/>
      <Counter delta={delta} max={max} getReset={getReset} needToReset={reset} getAllMax = {getAllMax}/>
    </div>
  );
}

export default App;

