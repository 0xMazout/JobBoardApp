import React, { useState } from "react";
import style from "./styles/StepperInput.module.scss";

type Props = {
    max: number;
    min: number;
    getCallBack: (value: number) => void;
}

const InputNumber = (_props: Props) => {
    const [value, setValue] = useState(1);
    const min = _props.min;
    const max = _props.max;
  
    const increment = () => {
      
      if (typeof max === 'number' && value >= max) return;
      
      setValue(value+1);
      _props.getCallBack(value+1);
    }
  
    const decrement = () => {
      
      if (typeof min === 'number' && value <= min) return;
      
      setValue(value-1);
      _props.getCallBack(value-1);
    }
    
      return (
        <div className={style.inputNumber}>
          <button type="button" onClick={decrement}>&minus;</button>
          <span>{value}</span>
          <button type="button" onClick={increment}>&#43;</button>     
        </div>
      )

  }
export default InputNumber  
//   ReactDOM.render(
//     <div>
//       <InputNumber min={0} max={1000} />
//     </div>, 
//     document.getElementById('root')
//   )