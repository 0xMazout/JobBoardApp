import React from 'react'
import styles from "./styles/longTextInput.module.scss"

type Props = {
    placeholder:string
    title:string
    rowNumber?:number 
}

function longTextInput(_props: Props) {

  // Make a choose implement a state or implement a new store 
  // a dynamic store passed to the component can be awesome but it is necessary
  //  a state and callback can be used on return 

  return (
    <>
    <p className={styles.DescriptionTitle}>{_props.title}</p>
    <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={_props.placeholder} rows={_props.rowNumber ? _props.rowNumber : 6 }>
    </textarea>
    </>
  )
}

export default longTextInput