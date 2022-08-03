import React, { JSXElementConstructor, ReactElement, ReactNode, useCallback, useRef, useState } from "react";
import MainLayout from "../../components/MainLayout";
import styles from "../../styles/modules/CreateProject.module.scss";
import TagsButton from "../../components/styledComponents/TagsButton";
import { ITags } from "../../interfaces/iTags";
import { IProject } from "../../interfaces/iProject";
import tagsProjects from "../../exemples/tagsProjects.json";
import jsonBlockChainNames from "../../exemples/blockChainNames.json";
import typeWorkProfiles from "../../exemples/typeWorkProfiles.json";
import FetchDatafromJson from "../../components/utilityComponents/fetchDatafromJson";
import MultiSelectDropDown from "../../components/styledComponents/MultiSelectDropDown";
import Link from "next/link";
import LabelInput from "../../components/styledComponents/LabelInput";
import {mainStore } from "../../store/MainStore";
import {useStoreContainer} from "../../hooks/useStoreContainer";
import { action, computed, get, makeAutoObservable, observable, reaction, set } from "mobx";
import { Observer, useLocalObservable } from "mobx-react";
import CardMembersSearched from '../../components/Cards/CardMembersSearched'
import ToggleButtonYesNo from "../../components/styledComponents/toggleButtonYesNo";
import StepperInput from "../../components/styledComponents/StepperInput";
import   {observer} from "mobx-react-lite";
import longTextInput from "../../components/styledComponents/longTextInput";
import LabelElement from "../../components/styledComponents/LabelElement";
import { StatusProject } from "../../enums/statusProject";
import SubmitButton from "../../components/styledComponents/SubmitButton";

type Props = {
  children: ReactNode;
};

const CreateProject = (_props: Props) => {
  const [isSplitSharing, setSplitSharing] = useState(false);
  const [tagsLists, setTagsLists] = useState(Array<string>());
  // const [tabofMembers, setTabofMembers] = useState(Array<ReactElement>)
  const {projectStore,labelStore} = useStoreContainer()


  const childRef = useRef();

  // tentative 27.07.2022
  // On passe par un array classique et on stock dans cet array de maniere classique on met en observable 
  // numberMember pour s'en servir pour regénerer a chaque fois l'array et le display quand numbermember change 
  const states = observable({
    numberMember: 1,
    arrayMembers:[CardMembersSearched(1)]
  })

  const statesProject = observable({
    title:"",
    description:"",
    theme:"",
    arrayBlockChainNames:new Array<String>,
    arrayStatusNames:new Array<String>,
  })
  
  const updateNumberMember = action((valueFromInput) =>{
    // trace(true);
    console.log("im updateNumberMember")
    states.numberMember = valueFromInput
  })

  const arrayStatus = [{
    "name": StatusProject.ProductLive},{
    "name": StatusProject.Started},{
    "name": StatusProject.StartingBlock
  }]  

  // const resultCardsMemberSearched = CardMembersSearched()

  //26.07.2022
  // lire ce qu'il y a plus  bas LFA 

  // Create Computed from arrayMembers
  // Doit réagir lorsque arrayMembers change (ajout ou suppression d'un élément)
  // Renvoie un mapping de arrayMembers
  const getArrayMembers = computed(() => {
    states.numberMember
    return projectStore.ProjectData.arrayMembers.map(() => React.createElement(CardMembersSearched))
  }
  );
  
  const newTab = observable({
    arrayOfCardMember : []
  })

  //la solution est ici computed ou reaction pour observer les changements d'arrayMembers
  // On affiche bien le premier coup mais on ne peut pas ajouter de cards ca ne se met pas a jour
  //a l'heure actuelle aucun passage dans reaction // meme lorsquil est appellé dans le callback du stepperInput
//   const UpdateDisplayCardMembers = reaction(() => 
//     states.numberMember
//   , () => {
    
//     console.log("je suis une reaction")
//     setTabofMembers(projectStore.ProjectData.arrayMembers.map(() => {     
//       return(CardMembersSearched());
//   }))
//     return <>
//     {states.arrayMembers.map(() => {
//       CardMembersSearched();
//   })}
//   </>
// }  
// )

// const UpdateDisplayCardMembersWithNonTabObservable = reaction(() => 
// states.numberMember
// , () => {

// console.log("je suis une reaction2")
// return <>
// {newTab}
// </>
// }  
// )


const delFromCardMemberArray = action(()=>{
  newTab.arrayOfCardMember.splice(newTab.arrayOfCardMember.length)
  projectStore.ProjectData.arrayMembers.splice(projectStore.ProjectData.arrayMembers.length-1)
  // states.arrayMembers.splice(states.arrayMembers.length);
  console.log("imdelfunction")
})


const addfromCardMemberArray = action((value: number)=>{
  // console.log(states.arrayMembers)
  console.log("imAddfunction")
  projectStore.ProjectData.arrayMembers.push(CardMembersSearched(value))

});
  //IT WORKED ACTION IS LIKE THIS !!
  // My problem is how to get length on array observable
  //Creuser Proxy , car l'objet a l'air d'être contenue dans Proxy
  //Proxy est un objet Mobx
  const UpdateCardMemberSearched = action((value: number)=>{

    // mon tableau est un tableau de multiples objets[{...},{...}]
    // console.log(states.arrayMembers.length me donne 1)
    // je cherche a obtenir la valeur de la longueur du tableau observable

  (value < projectStore.ProjectData.arrayMembers.length) ? delFromCardMemberArray() : addfromCardMemberArray(value); 
    runconsoleLog("hello i'm console log from action function")    
  })


  const runconsoleLog = (value) => {
      console.log(value)
  } 

  
  const HandleSubmit = (event) => action((MainStore) => {
    MainStore.labelStore.updateSubmit();
    event.preventDefault();
  })

  //Here we take datas from store and put it into DB
  //We launch process and when we get a response we update button status ui
  const submitThisForm = () => {

  }
  // const cardMemberTryGenerate = CardMembersSearched()
//Input Place Start
  const resultTagsFromDatafetch = FetchDatafromJson({
    arraySource: tagsProjects,
    resultType: TagsButton,
    resultStyleName: styles.TagsButton,
    Callback: (tagsChecked: Array<string>) => {
      setTagsLists(tagsChecked);
      projectStore.ProjectData.tags = tagsChecked
    }
  });

  
  //Copy this to implement Toggle Button
  const resultToggleButtonCommercialProject = ToggleButtonYesNo({
    getCallback(value) {
        mainStore.projectStore.updateCommercialProject(value) 
    },
    label: "Commercial Project ?"
  })

  //Copy this to implement Toggle Button
  // const resultToggleButtonSplitSharing = ToggleButtonYesNo({
  //   getCallback(value) {
  //       projectStore.updateSplitSharing(value) 
  //   },
  //   label: "Split Sharing ?"
  // })


  const resultStepperInput = StepperInput({
    max:100,
    min:1,
    getCallBack: (value) => {
      UpdateCardMemberSearched(value)
      updateNumberMember(value)
    }
  })

  const resultBlockChainNames = MultiSelectDropDown({
    arraySource: jsonBlockChainNames ,
    displayName: "name",
    singleSelect:true,
    getSelectedList: action((selectedList: Array<String>) => {
      statesProject.arrayBlockChainNames = selectedList;
    }),
    width:"20em"
  })

  const resultStatusName = MultiSelectDropDown({
    arraySource: arrayStatus ,
    displayName: "name",
    singleSelect:true,
    getSelectedList: action((selectedList: Array<String>) => {
      statesProject.arrayBlockChainNames = selectedList;
    }),
    width:"20em"
  })

//Placeholders place start
const placeholderForTitle = "Hello i'm your Project Title "
const placeholderForDescription = "Be catchy and be Smart this is your golden bullet "
const placeholderForTheme = "Elevator Pitch"
//Placeholders place end

// LongTextInput place start
  const resultTitle = longTextInput({
    placeholder: placeholderForTitle,
    title: "Title",
    rowNumber: 2,
    getCallBack: action((value) => {
      statesProject.title = value
    })
  })
  const resultTheme = longTextInput({
    placeholder: placeholderForTheme,
    title: "Theme",
    rowNumber: 3,
    getCallBack: action((value) => {
      statesProject.theme = value
    })
  })
  const resultDescription = longTextInput({
    placeholder: placeholderForDescription,
    title: "Description",
    rowNumber: 10,
    getCallBack: action((value) => {
      statesProject.description = value
    })
  })
// LongTextInput place end
//Input place end 
  return (
    <>

      {/* <form onSubmit={HandleSubmit}> */}
        <form>
        <div className={styles.card}>
        <div className={styles.elementContainer}>
        <h2 className={styles.mainTitleCard}>
          Project Creation
        </h2>
        {/* <LabelElement value={"Project Creation"}/> */}
        <br></br>
        {resultTitle}
        {/* <LabelInput label="Title"/> */}
        {resultTheme}
        {/* <LabelInput label="Description"/> */}
        {/* Is a 150 words Speech to catch users */}
        {resultDescription}
        {/* <LabelInput label="Theme"/> */}
        
        <div className={styles.containerElement}>
          <div className={styles.labelsColumns}>
          <LabelElement value={"Blockchain"}/>
          <br></br>
          <LabelElement value={"Status"}/>
          </div>
          <div className={styles.elementFromContainer}>
            <div className={styles.labelsColumns}>
            {resultBlockChainNames}
              <div className={styles.labelNumber2}>
              {resultStatusName}
              </div>
            </div>
            {resultToggleButtonCommercialProject}
          </div>
        </div>
        {/* {cardMemberTryGenerate} */}
    
      <LabelElement value={"Tags"}/>
      {resultTagsFromDatafetch}
      <br></br>

      {/* DO NOT DELETE START */}
      {/* {resultToggleButtonSplitSharing}

      {projectStore.ProjectData.isSplitSharing ? (<>
      <br />
      <div className={styles.group}>
        <input className={styles.inputText} type="text" required />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
        <label className={styles.labelText}>Split Sharing %</label>
      </div>
      </>
      ) : (<div></div>)} */}

      {/* DO NOT DELETE END */}

      <LabelElement value="Members Number"/>
      {resultStepperInput}
{/* .get can access to computed values */}
      {getArrayMembers.get()}
      {/* <div>
        <button className={styles.SubmitButton} type='submit' onClick={
          (evt) => {
            HandleSubmit(evt)
          }
        }>

        </button>
      </div> */}
      <SubmitButton getClickOnSubmit={submitThisForm} childRef={childRef}></SubmitButton>
</div>
</div>
      </form>
            
    </>
  );
};

CreateProject.PageLayout = MainLayout;

export default observer(CreateProject) ;
