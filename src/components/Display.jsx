import './Display.css';

const Display=({displayValue})=>{

   return <input id="display" type="text" value={displayValue} readOnly/>;
}
export default Display;