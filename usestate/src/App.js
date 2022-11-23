import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [max,setMax]=useState(1)

function handelMax(e){
  setMax(Number(e.target.value))
}
function handleDelta(e){
  setDelta(Number(e.target.value))
   }
  return (
    <div className="App">
      useState <br/>
      enter max value<input type = "number" value={max} onChange={handelMax}/>
      <br/>
      enter delta<input type = "number" value={delta} onChange={handleDelta}/>
      <Counter delta = {delta} max={max}/>
      <Counter delta={delta} max={max}/>
    </div>
  );
}

export default App;

