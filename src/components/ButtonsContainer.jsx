import  './ButtonsContainer.css';

const ButtonsContainer=({onButtonClick})=>{
  const buttonNames=[
    { key: 'AC', value: 'clear' },
    { key: '/', value: 'divide' },
    { key: '*', value: 'multiply' },
    { key: '7', value: 'seven' },
    { key: '8', value: 'eight' },
    { key: '9', value: 'nine' },
    { key: '-', value: 'subtract' },
    { key: '4', value: 'four' },
    { key: '5', value: 'five' },
    { key: '6', value: 'six' },
    { key: '+', value: 'add' },
    { key: '1', value: 'one' },
    { key: '2', value: 'two' },
    { key: '3', value: 'three' },
    { key: '=', value: 'equals' },
    { key: '0', value: 'zero' },
    { key: '.', value: 'decimal' }
  ];
   
 return(
   <div id="buttons-container">
   {buttonNames.map(buttonName=><button className="buttons" id={buttonName.value}key={buttonName.key} onClick={onButtonClick}>{buttonName.key}</button>)}
    
  </div>
  )

 
}
export default ButtonsContainer;