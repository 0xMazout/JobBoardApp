import React, { ReactNode } from 'react';
import MainLayout from '../../components/MainLayout';
import styles from "../../styles/modules/CreateProject.module.scss";
import ToggleButtonCustom from '../../components/styledComponents/ToggleButtonCustom';
import TagsButton , {selectPills} from '../../components/styledComponents/TagsButton';
import { ITags } from '../../interfaces/iTags';
import tagsProjects from '../../exemples/tagsProjects.json';

type Props = {
  children: ReactNode;
}

const CreateProject = (_props: Props) => {
  
  
// Populate and Create Cards
// Contains Logic about Cards and Displaying
let cardsProjects = new Array();
//Contains all Json Iproject
const projects = new Array<ITags>();
// const cardProjects = new CardProject[]
const populateDataFromProjects = (data: Array<ITags>) => {
  data.forEach((element) => {
    projects.push(element);    
  });
};
let tryread = tagsProjects;
populateDataFromProjects(tryread);

{projects.map((arrayItem) => {
    cardsProjects.push(<TagsButton className={styles.cardProject} item={arrayItem}></TagsButton>)
 })}


  return (
    
    <>
    <form>
      <div>Here to create new Project</div>
    <div className={styles.group}>      
    <input className={styles.inputText} type="text" required />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.labelText}>Title</label>
    </div>
      
    <div className={styles.group}>      
      <input className={styles.inputText} type="text" required/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.labelText}>Description</label>
    </div>

    <div className={styles.group}>      
      <input className={styles.inputText} type="text" required/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.labelText}>Pro or Learning</label>
    </div>
    
    <div className={styles.group}>      
      <input className={styles.inputText} type="text" required/>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.labelText}>Email</label>
    </div>
    </form>
        <p>Tags</p>
    {/* <ToggleButtonCustom>
    </ToggleButtonCustom> */}
    {cardsProjects}
    <br></br>
      <input>
      </input>
        <p>Description</p>
      <input>
      </input>
        <p>Deadline</p>
      <input>
      </input>
        <p>Status</p>
      <input>
      </input>
        <p>Team</p>
      <input>
      </input>
        <p>Theme</p>
      <input>
      </input>
        <p>Category</p>
      <input>
      </input>
        <p>Blockchain</p>
      <input>
      </input>
    </>
  )
}

CreateProject.PageLayout = MainLayout;

export default CreateProject