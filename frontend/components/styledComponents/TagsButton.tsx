import React , {MouseEvent, useEffect, useState} from 'react'
import styles from "../styledComponents/styles/TagsButton.module.scss";

type Props = {
    item: {
        name:string;
    }
}

function TagsButton(_props: Props) {
const [isClicked, setisClicked] = useState(false)

const selectPills = (event: MouseEvent<HTMLButtonElement>) => {    
    setisClicked(!isClicked);
}
    return (<>
    <button className={!isClicked?styles.pill : styles.pill+" "+styles.pillSelected} onClick={selectPills} type="button">
        {_props.item.name}
    </button>
  </>
  )
}

export default TagsButton

