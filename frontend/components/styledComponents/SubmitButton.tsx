import React, { forwardRef, useRef, useImperativeHandle, useState } from "react";
import styles from "./styles/SubmitButtons.module.scss"
type Props = {
  stateValid?: boolean;
  getClickOnSubmit: () => void;
  childRef: React.RefObject<any>;
};


const SubmitButton = (_props: Props) => {

  //useless atm but can be used to pass ref to button
  const buttonRef = useRef<HTMLButtonElement>(null);

  
  //I can call from parent, when Db as validate register and update _props.stateValid  
  useImperativeHandle(_props.childRef, () => {
    return {
    sucessResponse: () => {buttonRef.current.classList.add(styles.sucess)},
    errorResponse: () => {buttonRef.current.classList.add(styles.error)}}
  })

  const submitOnClick = () =>{
    buttonRef.current.classList.add(styles.animate)
    _props.getClickOnSubmit()}
  
    //  _props.stateValid ? setstateValid("success") : setstateValid("error");
//${stateValid}
  return (
    <div>
      <button ref={buttonRef} onClick={submitOnClick} className={`${styles.button} ${styles.stateValid}`}>Submit</button>
    </div>
  );
};

export default forwardRef(SubmitButton);
