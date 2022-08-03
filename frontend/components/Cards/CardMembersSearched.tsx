import React, { Key, useState } from 'react'
import styles from './styles/CardMemberSearched.module.scss'
import MultiSelectDropDown from '../styledComponents/MultiSelectDropDown'
import LabelInput from '../styledComponents/LabelInput'
import typeWorkProfiles from "../../exemples/typeWorkProfiles.json";
import {useStoreContainer} from "../../hooks/useStoreContainer";
import { action, observable } from 'mobx';
import {StatusMember} from "../../enums/statusMember";
import longTextInput from '../styledComponents/longTextInput';

function  CardMembersSearched (index?: number) {

  // console.log(index)

  //  const {memberStore} = useStoreContainer()

  // const [typeSelected, setTypeSelected] = useState(Array<string>());
  // const [status, setStatus] = useState(Status.Partner)
  const states = observable({
      title:"",
      typesSelected:new Array<string>,
      StatusMember: StatusMember.Partner,
      workLoad: "",
      missionDescription: "",
      skills: "",
      index: index
  })
// got a problem on the value 
const arrayStatus = [{
  "name": StatusMember.Partner},{
  "name": StatusMember.ServiceProvider},{
  "name": StatusMember.TeamMember
}]
  // const arrayStatusMember = [StatusMember.Partner, StatusMember.ServiceProvider, StatusMember.TeamMember]
  //implement Member Store class
  // implement Member Entity on each count to store Data
  // Get a state on Project Store to store all Members Data 
  // Then if Project is Submit catch Data


  //implement Set State , setTypeSelected

  //populate and create MultiSelectDropDown with typeWorkProfiles
  const resultTypeWorkProfilesFromDatafetch = MultiSelectDropDown({
    arraySource: typeWorkProfiles,
    displayName: "name",
    getSelectedList: action((selectedList: Array<string>) => {
      console.log("hello im console log from action function in Card member bro")
      states.typesSelected = selectedList;
    })
  })

const placeholderForWorkLoadInput = `make a speech about Implication time and devoted time to project you need,
talk about Work Load and Pressure at the beggining is a good way to start a new project 
`

const placeholderForTitle  = `Here type the Member title, try to be attractive and catchy , 100 characters max
`

const placeholderForMissionDescription = `make a speech about what will be the mission for this member 
or if it's too generic you can list some of the main tasks,
Be carefull with the length of the speech, it shouldn't be too long 
`

const placeholderForSkills = `make a speech about Skills you're waiting for a new Member ,
To start a new project you need to have members with specifics skills and socials skills, The Type Skills have been selected on top so be innovative ! 
`
  const resultStatusMember = MultiSelectDropDown({
    arraySource: arrayStatus ,
    displayName: "name",
    singleSelect:true,
    getSelectedList: (selectedList: Array<StatusMember>) => {
      states.StatusMember = selectedList[0];
    }
  })


  // 19.07.2022
  // implement all of the longtextinput and test it on the frontend
  const resultTitle = longTextInput({
    placeholder: placeholderForTitle,
    title: "Title",
    rowNumber: 2,
    getCallBack: action((value) => {
      states.title = value
    })
  })
  return (
    
    <div className={styles.card}>
      <div className={styles.elementContainer}>
      <p>

      </p>
      {resultTitle}
        <p className={styles.DescriptionTitle}>
          List Profils : MultiSelect Type Profils
          </p>
          {resultTypeWorkProfilesFromDatafetch}
        <p className={styles.DescriptionTitle}>
          Status
          </p> 
          {resultStatusMember}
        <div className={styles.Separator}>
          </div>
          <p className={styles.DescriptionTitle}>Work Load</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForWorkLoadInput} rows={6}>
          </textarea>
          <p className={styles.DescriptionTitle}>Mission Description</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForMissionDescription} rows={6}>
          </textarea>
          <p className={styles.DescriptionTitle}>Technical Skills / Socials Skills</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForSkills} rows={6}>
          </textarea>
      </div>
    </div>
  
  )
}

export default CardMembersSearched