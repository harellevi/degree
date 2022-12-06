import { useState, useEffect } from "react";

function Counter(props) {
    const [count1, setCount] =useState(1) 
    const {delta} = props
    const {max} =props
    const{getReset}=props
    const{needToReset}=props
    const{getAllMax}=props
    console.log(max)

    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset])
    
    function incr(){
        setCount(
            function(oldCount){
              if (oldCount+delta > max){
                getAllMax(oldCount)
              return 0 }
              else{
                getAllMax(oldCount+delta)
              return oldCount+delta
            }
                          }
            )  }
    function reset(){
      getReset(true) 
      //setCount(0)
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
  