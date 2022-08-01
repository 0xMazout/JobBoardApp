import { action, observable } from 'mobx'
import React, { EventHandler } from 'react'
import LabelElement from './LabelElement'
import styles from "./styles/longTextInput.module.scss"

type Props = {
    placeholder:string
    title:string
    rowNumber?:number 
    getCallBack: (value:string) => void
}

function longTextInput(_props: Props) {

  const changeValue = (valueFromInput) => {
    _props.getCallBack(valueFromInput)
  }
  // Make a choose implement a state or implement a new store 
  // a dynamic store passed to the component can be awesome but it is necessary ?
  //  a state and callback can be used on return 

  return (
    <>
    <LabelElement value={_props.title} />
    <textarea className={styles.LongTextMultiLine} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => changeValue(event.target.value)} wrap="true" placeholder={_props.placeholder} rows={_props.rowNumber ? _props.rowNumber : 6 }>
    </textarea>
    </>
  )
}

export default longTextInput