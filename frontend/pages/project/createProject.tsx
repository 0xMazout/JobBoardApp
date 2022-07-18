import React, { ReactNode, useCallback, useState } from "react";
import MainLayout from "../../components/MainLayout";
import styles from "../../styles/modules/CreateProject.module.scss";
import TagsButton from "../../components/styledComponents/TagsButton";
import { ITags } from "../../interfaces/iTags";
import { IProject } from "../../interfaces/iProject";
import tagsProjects from "../../exemples/tagsProjects.json";
import typeWorkProfiles from "../../exemples/typeWorkProfiles.json";
import FetchDatafromJson from "../../components/utilityComponents/fetchDatafromJson";
import MultiSelectDropDown from "../../components/styledComponents/MultiSelectDropDown";
import Link from "next/link";
import LabelInput from "../../components/styledComponents/LabelInput";
import {mainStore , useStoreContainer} from "../../store/MainStore";
import { action, observable } from "mobx";
import { Observer } from "mobx-react";
import CardMembersSearched from '../../components/Cards/CardMembersSearched'
import ToggleButtonYesNo from "../../components/styledComponents/toggleButtonYesNo";

type Props = {
  children: ReactNode;
};

const CreateProject = (_props: Props) => {
  const [isSplitSharing, setSplitSharing] = useState(false);
  const [tagsLists, setTagsLists] = useState(Array<string>());
  const [typeSelected, setTypeSelected] = useState(Array<string>());
  const MainStore = useStoreContainer()
  // will contains generic callback from inputs
  // const projectCreated : IProject = {
  //   name: "",
  //   description: "",
  //   tags: [],
  //   typeWork: [],
  //   isSplitSharing: false,
  //   members: [],
  //   id: "",
  //   createdAt: "",
  //   updatedAt: "",
  // };
  // const [project, setProject] = useState(projectCreated);
  // Populate and Create generic objects from props
  // Fetch data from json and Populate Tags
  const resultTagsFromDatafetch = FetchDatafromJson({
    arraySource: tagsProjects,
    resultType: TagsButton,
    resultStyleName: styles.TagsButton,
    Callback: (tagsChecked: Array<string>) => {
      setTagsLists(tagsChecked);
    }
  });


  //Copy this to implement Toggle Button
  const resultToggleButtonCommercialProject = ToggleButtonYesNo({
    getCallback(value) {
        mainStore.projectStore.updateCommercialProject(value) 
    },
    label: "Commercial Project ?"
  })

    //populate and create MultiSelectDropDown with typeWorkProfiles
    const resultCategoriesFromDatafetch = MultiSelectDropDown({
      arraySource: typeWorkProfiles,
      displayName: "name",
      getSelectedList: (selectedList: Array<string>) => {
        setTypeSelected(selectedList);
      }
    })


  
  const HandleSubmit = (event) => action(() => {
    MainStore.labelStore.updateSubmit();
    event.preventDefault();
  })

  return (
    <>

      {/* <form onSubmit={HandleSubmit}> */}
      <form>
        <div>Here to create new Project</div>
        <br></br>
        <LabelInput label="Title"/>
        
        <LabelInput label="Description"/>
        {/* Is a 150 words Speech to catch users */}
        <LabelInput label="Theme"/>
        
        {resultToggleButtonCommercialProject}
        
    
      <p>Tags</p>
      {resultTagsFromDatafetch}
      <br></br>
      
      {/* Need to be replace with toggle button */}
      <div className={styles.checkBoxx}>
        <label className={styles.labelCheckBox}>Split Sharing ?</label>
        <input className={styles.inputCheckBox} type="checkbox" onChange={(e)=>{
          setSplitSharing(e.target.checked)
        }}>
        </input>

      </div>
      {isSplitSharing ? (<>
      <br />
      <div className={styles.group}>
        <input className={styles.inputText} type="text" required />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
        <label className={styles.labelText}>Split Sharing %</label>
      </div>
      </>
      ) : (<div></div>)}

      <br></br>
      <CardMembersSearched>
        
      </CardMembersSearched>
      <p>Description</p>
      <input></input>
      <p>Deadline</p>
      <input></input>
      <p>Status</p>
      <input></input>
      <p>Team</p>
      <input></input>
      <p>Theme</p>
      <input>{/* Is a List with Multiple choices 1 to 3 */}</input>
      <p>Category</p>
      <input></input>
      
      <p>Blockchain</p>
      <input></input>

      <div>
        <button className={styles.SubmitButton} type='submit' onClick={
          (evt) => {
            HandleSubmit(evt)
          }
        }>
            <p>Submit</p>
        </button>
      </div>

      </form>
            
    </>
  );
};

CreateProject.PageLayout = MainLayout;

export default CreateProject;
