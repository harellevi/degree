import { useState } from "react";
function Counter() {
    const [count1, setCount] =useState(1) 

    function incr(){
        setCount(
            function(oldCount){
                return oldCount+1
            }
            ) 
        }

    function reset(){
      setCount(
        function(oldCount){
          return oldCount=1
        }
        )   
      }    

    return (
      <div className="App">
        <h1> Counter</h1>
         <p> Counter is at {count1}</p>
         <button onClick={incr}> Click to add 1 to counter</button>
         <button onClick={reset}> Click to reset counter</button>
        
      </div>
    );
    }
  export default Counter;
  