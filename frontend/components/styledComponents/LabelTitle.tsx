import React from 'react'
import styles from "./styles/longTextInput.module.scss"

type Props = {
    value:string    
}

function LabelTitle(_props: Props) {

  return (
    <><h2 className={styles.Title}>{_props.value}</h2></>
  )
}

export default LabelTitle