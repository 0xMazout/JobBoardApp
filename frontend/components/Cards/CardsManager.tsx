import React from "react";
import examplecopy from "../../exemples/projects copy.json";
import { IProject } from "../../interfaces/iProject";
import CardProject from "./CardProject"
import styles from "../Cards/styles/CardsManager.module.scss";
// Populate and Create Cards
// Contains Logic about Cards and Displaying
let cardsProjects = new Array();
//Contains all Json Iproject
const projects = new Array<IProject>();
// const cardProjects = new CardProject[]
const populateDataFromProjects = (data: Array<IProject>) => {
  data.forEach((element) => {
    projects.push(element);    
  });
};
let tryread = examplecopy;
populateDataFromProjects(tryread);

{projects.map((arrayItem) => {
    cardsProjects.push(<CardProject className={styles.cardProject} arrayItem={arrayItem} key={projects.indexOf(arrayItem)}></CardProject>)
 })}
 

const CardsManager = () => {    
  return<>
    <div className={styles.grid}>
    {cardsProjects}

    </div>
   </>
};



export default CardsManager;
