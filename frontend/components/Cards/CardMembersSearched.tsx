import React, { Key, useState } from 'react'
import styles from './styles/CardMemberSearched.module.scss'
import MultiSelectDropDown from '../styledComponents/MultiSelectDropDown'
import LabelInput from '../styledComponents/LabelInput'
import typeWorkProfiles from "../../exemples/typeWorkProfiles.json";

import { action, observable } from 'mobx';
import {StatusMember} from "../../enums/statusMember";
import longTextInput from '../styledComponents/longTextInput';
import ProjectStore from '../../stores/ProjectStore';
import { IMemberRequest } from '../../interfaces/iMemberRequest';

const CardMembersSearched = (store:ProjectStore, key?: number) => {
  const index = key ? key : 0;
  const states : IMemberRequest = {
    key: index,
    title:"",
    typeworkProfiles:new Array<string>,
    StatusMember: StatusMember.Partner,
    workLoad: "",
    missionDescription: "",
    technicalSocialsSkills: "",
  }
  
  const initialize = action(() => {
    store.AddMembersWanted(states);
  })
  
  //Initialize the store when the component is mounted if it has not been intialized yet
  if(!store.ProjectData.arrayMembers[index]){
    initialize();
  }
  // initialize()
// got a problem on the value 
const arrayStatus = [{
  "name": StatusMember.Partner},{
  "name": StatusMember.ServiceProvider},{
  "name": StatusMember.TeamMember,
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
      store.ProjectData.membersWanted[index].typeworkProfiles = selectedList;
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
    store.ProjectData.membersWanted[index].StatusMember = selectedList[0];
    }
  })


  // 19.07.2022
  // implement all of the longtextinput and test it on the frontend
  const resultTitle = longTextInput({
    placeholder: placeholderForTitle,
    title: "Title",
    rowNumber: 2,
    getCallBack: action((value) => {
    store.ProjectData.membersWanted[index].title = value
    })
  })
  const resultWorkLoad = longTextInput({
    placeholder: placeholderForWorkLoadInput,
    title: "Work Load",
    rowNumber: 6,
    getCallBack: action((value) => {
    store.ProjectData.membersWanted[index].workLoad = value
    })
  })
  const resultMissionDescription = longTextInput({
    placeholder: placeholderForMissionDescription,
    title: "Mission Description",
    rowNumber: 6,
    getCallBack: action((value) => {
    store.ProjectData.membersWanted[index].missionDescription = value
    })
  })
  const resultTechnicalSkills = longTextInput({
    placeholder: placeholderForSkills,
    title: "Technical Skills / Socials Skills",
    rowNumber: 6,
    getCallBack: action((value) => {
     store.ProjectData.membersWanted[index].technicalSocialsSkills = value
    })
  })
  return (
    <>
    <div className={styles.card}>
      <div className={styles.elementContainer}>
      {resultTitle}
        <p className={styles.DescriptionTitle}>
          Work Profile
          </p>
          {resultTypeWorkProfilesFromDatafetch}
        <p className={styles.DescriptionTitle}>
          Status
          </p> 
          {resultStatusMember}
        <div className={styles.Separator}>
          </div>
          {resultWorkLoad}
          {resultMissionDescription}
          {resultTechnicalSkills}
          {/* <p className={styles.DescriptionTitle}>Work Load</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForWorkLoadInput} rows={6}>
          </textarea>
          <p className={styles.DescriptionTitle}>Mission Description</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForMissionDescription} rows={6}>
          </textarea>
          <p className={styles.DescriptionTitle}>Technical Skills / Socials Skills</p>
          <textarea className={styles.LongTextMultiLine} wrap="true" placeholder={placeholderForSkills} rows={6}>
          </textarea> */}
      </div>
    </div>
  </>
  )
}

export default CardMembersSearched