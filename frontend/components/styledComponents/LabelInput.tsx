import React, { useState } from 'react'
import styles from './styles/LabelInput.module.scss'
type Props = {
    label: string
    getCallback: (value:string) => void
}

function LabelInput(_props: Props) {
  const [value, setValue] = useState(String)

  const _getCallback = (value:string) => {
    _props.getCallback(value)
    const inputValue = document.getElementById("inputText") as HTMLInputElement
    const valuess = inputValue?.value
  }

  return (
    <div className={styles.group}>
    <input id='inputText' className={styles.inputText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(value,event.target.value)} type="text" required />
    <span className={styles.highlight}></span>
    <span className={styles.bar}></span>
    <label className={styles.labelText}>{_props.label}</label>
  </div>
  )
}

export default LabelInput