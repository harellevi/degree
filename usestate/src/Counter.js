import { useState } from "react";

function Counter(props) {
    const [count1, setCount] =useState(1) 
    const {delta} = props
    const {max} =props
    console.log(max)
    
    function incr(){
        setCount(
            function(oldCount){
              if (oldCount+delta >= max){
                return oldCount=1}
              else{
                return oldCount+delta}
                          }
            )  }
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
         <button onClick={incr}> Click to add {delta} to counter</button>
         <button onClick={reset}> Click to reset counter</button>
        
      </div>
    );
    }
  export default Counter;
  