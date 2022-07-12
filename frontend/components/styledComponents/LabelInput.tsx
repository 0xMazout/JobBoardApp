import { action , observable, when } from 'mobx'
import { observer } from "mobx-react-lite"
import React, { useState } from 'react'
import styles from './styles/LabelInput.module.scss'
import LabelStore from '../../store/LabelStore'
import { ILabel } from '../../interfaces/iLabel'
import {useStoreContainer} from '../../store/MainStore'


type Props = {
    label: string,
}

function LabelInput(_props: Props) {

  const MainStore = useStoreContainer()
  // const [value, setValue] = useState(String)
  const states = observable({
    valueee: typeof _props.label === 'string' ? _props.label : 0,
    label: _props.label,
  })
  const changeValue = (valueFromInput) => action( state =>{
    states.valueee = valueFromInput
    // MainStore.labelStore.stateLabels.isSubmit ?
  })
  /// Maybe we can use the loseFocus on input to submit to store 
  const submitToStore = () => {
    MainStore.labelStore.addLabel({
      name: states.label,
      value: states.valueee,
    }as ILabel)
  };
  
  when(() => MainStore.labelStore.stateLabels.isSubmit, () => {
    console.log("hello i'm submit")
    submitToStore()
  })


  // const inputText = observer(({ event.target.value }) => <input id='inputText' className={styles.inputText} 
  // onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event.target.value)} type="text" required />)



  // const _getCallback = (value:string) => {
  //   _props.getCallback(value)
  //   const inputValue = document.getElementById("inputText") as HTMLInputElement
  //   const valuess = inputValue?.value
  // }

  return (
    <div className={styles.group}>
    <input id='inputText' className={styles.inputText} 
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event.target.value)} type="text" required />
    <span className={styles.highlight}></span>
    <span className={styles.bar}></span>
    <label className={styles.labelText}>{_props.label}</label>
  </div>
  )
}



export default LabelInput