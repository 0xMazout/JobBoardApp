import React , {MouseEvent, useEffect, useState} from 'react'
import styles from "../styledComponents/styles/TagsButton.module.scss";

type Props = {
    getCallback: (value:boolean, name:string) => void;
    item: {
        name:string;
    }
}

function TagsButton(_props: Props) {
const [isClicked, setisClicked] = useState(false)

const selectPills = (event: MouseEvent<HTMLButtonElement>) => {    
    // We send !isClicked because state doesn't change when we passed the value to parent
    setisClicked(!isClicked);
    _props.getCallback(!isClicked , _props.item.name);
}
    return (<>
    <button className={!isClicked?styles.pill : styles.pill+" "+styles.pillSelected} onClick={selectPills} type="button">
        {_props.item.name}
    </button>
  </>
  )
}

export default TagsButton

