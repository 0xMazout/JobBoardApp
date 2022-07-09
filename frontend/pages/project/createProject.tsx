import React, { ReactNode, useCallback, useState } from "react";
import MainLayout from "../../components/MainLayout";
import styles from "../../styles/modules/CreateProject.module.scss";
import ToggleButtonCustom from "../../components/styledComponents/toggleButtonCustom";
import TagsButton from "../../components/styledComponents/TagsButton";
import { ITags } from "../../interfaces/iTags";
import { IProject } from "../../interfaces/iProject";
import tagsProjects from "../../exemples/tagsProjects.json";
import typeWorkProfiles from "../../exemples/typeWorkProfiles.json";
import FetchDatafromJson from "../../components/utilityComponents/fetchDatafromJson";
import MultiSelectDropDown from "../../components/styledComponents/MultiSelectDropDown";
import Link from "next/link";
import LabelInput from "../../components/styledComponents/LabelInput";

type Props = {
  children: ReactNode;
};

const CreateProject = (_props: Props) => {
  const [isSplitSharing, setSplitSharing] = useState(false);
  const [tagsLists, setTagsLists] = useState(Array<string>());
  const [typeSelected, setTypeSelected] = useState(Array<string>());
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
      console.log(tagsChecked);
      // useCallback(() => setTagsLists((tagsChecked) => [tagsChecked, tagsLists]),[item.name]);
    }
  });
  //populate and create MultiSelectDropDown with typeWorkProfiles
  const resultTypeWorkProfilesFromDatafetch = MultiSelectDropDown({
    arraySource: typeWorkProfiles,
    displayName: "name",
    getSelectedList: (selectedList: Array<string>) => {
      setTypeSelected(selectedList);
    }
  })

  const getCallbackFromElements = () => {
    setProject({...project, tags: tagsLists, typeWork: typeSelected});
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <form>
      {/* <form onSubmit={}> */}
        <div>Here to create new Project</div>
        <div className={styles.group}>
          <input className={styles.inputText} type="text" required />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelText}>Title</label>
        </div>

        <div className={styles.group}>
          <input className={styles.inputText} type="text" required />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelText}>Description</label>
        </div>

        <div className={styles.group}>
          <input className={styles.inputText} type="text" required />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelText}>Pro or Learning</label>
        </div>

        {/* Is a 150 words Speech to catch users */}
        <div className={styles.group}>
          <input className={styles.inputText} type="text" required />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelText}>Theme</label>
        </div>
      </form>
      <p>Tags</p>
      {/* <ToggleButtonCustom>
    </ToggleButtonCustom> */}
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

      {resultTypeWorkProfilesFromDatafetch}

      <div>
        <button className={styles.SubmitButton} type='submit' onClick={
          () => {
            getCallbackFromElements();
          }
        }>
            <p>Submit</p>
        </button>
      </div>
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
    </>
  );
};

CreateProject.PageLayout = MainLayout;

export default CreateProject;
