import { action , observable, when } from 'mobx'
import { observer } from "mobx-react-lite"
import React, { useState } from 'react'
import styles from './styles/LabelInput.module.scss'
import LabelStore from '../../store/LabelStore'
import { ILabel } from '../../interfaces/iLabel'
import {useStoreContainer} from "../../hooks/useStoreContainer";


type Props = {
    label: string,
    isNotRequired?: boolean,
}

function LabelInput(_props: Props) {

const MainStore = useStoreContainer()
  // const [value, setValue] = useState(String)
const states = observable({
    value: "",   
    label: _props.label
  })
  const changeValue = (valueFromInput) => action( states =>{
    states.value = valueFromInput
    // MainStore.labelStore.stateLabels.isSubmit ?
  })
  /// Maybe we can use the loseFocus on input to submit to store 
  const submitToStore = () => action(( MainStore) => {
    MainStore.labelStore.addLabel({
      name: states.label,
      value: states.value,
    }as ILabel)
  });
  
  when(() => MainStore.labelStore.stateLabels.isSubmit, () => {
    console.log("hello i'm submit")
    submitToStore()
  })

  return (
    <div className={styles.group}>
    <input id='inputText' className={styles.inputText} 
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(event.target.value)} type="text" required={_props.isNotRequired ? false : true} />
    <span className={styles.highlight}></span>
    <span className={styles.bar}></span>
    <label className={styles.labelText}>{_props.label}</label>
  </div>
  )
}



export default LabelInput