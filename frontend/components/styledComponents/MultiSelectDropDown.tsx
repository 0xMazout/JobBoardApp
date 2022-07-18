import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import "./styles/MultiSelectDropDown.module.css";

type Props = {
    arraySource: Array<any>,
    displayName:string,
    getSelectedList: (selectedList:Array<any>) => void;
    singleSelect?:boolean;
}

function MultiSelectDropDown(_props: Props) {

    // let state = {
    //     options: [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]
    // };
    
    const onSelect = (selectedList, selectedItem) => {
        // selectedList.push(selectedItem);
        _props.getSelectedList(selectedList);
    }
    
    const onRemove = (selectedList, removedItem) => {
        // selectedList.splice(selectedList.indexOf(removedItem), 1);
        _props.getSelectedList(selectedList);
    }

    return (
    <div style={{
        display: 'flex',
        width: "35em",
        minWidth:"10em"
    }}>   
         <Multiselect
    options={_props.arraySource} // Options to display in the dropdown
    // selectedValues={state.selectedValue} // Preselected value to persist in dropdown
    onSelect={onSelect} // Function will trigger on select event
    onRemove={onRemove} // Function will trigger on remove event
    displayValue={_props.displayName} // Property name to display in the dropdown options
    singleSelect={_props.singleSelect? true : false}
    style={{
        chips:{
            background: "#5212a5",
            color:"#FFF"
        },
        searchBox:{
            border: "1px solid #5212a5",
            borderRadius: "20px",
            width: "100%",
        },
        multiselectContainer:{
            width:"100%",
            minWidth:"15em",
        },
        optionContainer:{
            // backgroundColor:"#ae5280"
        },
        option:{
            // backgroundColor:"#ae5280"
        }
    }} // Optional style to apply to the dropdown
    />
    </div>
  )
}

export default MultiSelectDropDown
