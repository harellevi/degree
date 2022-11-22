import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1)

function handleDelta(e){
  setDelta(Number(e.target.value))
   }
  return (
    <div className="App">
      useState
      <input type = "number" value={delta} onChange={handleDelta}/>
      <Counter delta = {delta} />
      <Counter delta={delta}/>
    </div>
  );
}

export default App;

