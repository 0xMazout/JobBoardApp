import React from 'react'
import styles from "./styles/longTextInput.module.scss"

type Props = {
    value:string    
}

function LabelElement(_props: Props) {

  return (
    <><p className={styles.DescriptionTitle}>{_props.value}</p></>
  )
}

export default LabelElement