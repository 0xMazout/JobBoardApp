import React, { ComponentType, useState } from "react";

type Props = {
    //Array of an Interface populate by an import json on parent 
    arraySource: Array<{}>,
    resultType: ComponentType,    
    resultStyleName: string,
    Callback: (tagsChecked : Array<string>) => void;
 };



export default function FetchDatafromJson(_props: Props) {
  const [listData, setListData] = useState(Array<string>)

  // type ReturnData = {
  //   returnComponents : any
  //   data : any
  // }
  // let returnData : ReturnData = {
  //   returnComponents: null,
  //   data : null,
  // };
  const getCallBackFromChild = async (value:any, name:string) => {
    //return true if value is boolean
    
    if (typeof value === "boolean") {

      (value === true)?
      (console.log(value),
        await setListData((listData) => [...listData, name]),
        console.log(listData),
        _props.Callback(listData)
      ):(
        console.log(value + "Hello" + name)
      );       
      }
        
    } 
    // returnData.data = value
    // Populate and Create generic objects from props
    //Create target Array
    const arrayTarget = new Array<any>();
  {
    _props.arraySource.map((propsItem) => {
      arrayTarget.push(
        <_props.resultType 
          className={_props.resultStyleName}
          item={propsItem}
          Callback={propsItem}
          getCallback={getCallBackFromChild}
          key={_props.arraySource.indexOf(propsItem)}
          ></_props.resultType>
      );
    });
  }
  
  return <>
  <div>{arrayTarget}</div>
  </>
}


