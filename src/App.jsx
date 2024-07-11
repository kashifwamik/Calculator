import { useState } from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';

function App() {
  const [calVal, setCalVal]=useState("");
  
  const handleButtonClick=(e)=>{
    const value=e.target.innerText;
    if (value === "AC") {
      setCalVal("");
    } 
    else if (value=== "=") {
         try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    }
     else {

        const operators=["+", "-", "*", "/"]
        const lastChar=calVal.slice(-1);
       if(operators.includes(lastChar) && operators.includes(value)) {
     //Allow minus sign after another operator for negative numbers
              if(value=="-" && lastChar !=="-"){
              setCalVal(calVal + value);
            }
             else{
              setCalVal(calVal.slice(0, -1)+ value);

          }
       } else{
      // Allow only one decimal point per number
          if (value === "." && calVal.slice(-1) === ".") {
        return;
      }
      const newDisplayValue = calVal + value;
      setCalVal(newDisplayValue);
    }
  }
  }
return (
    
    <div id="calculator">
     <Display displayValue={calVal} />
     <ButtonsContainer onButtonClick={handleButtonClick} />
      </div>
      
    
  )
}

export default App
