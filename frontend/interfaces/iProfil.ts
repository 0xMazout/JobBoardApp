export interface IProfil{
    username:string;
    title:string;
    description:string;
    historic:string[];  //à modifier avec l'objet Projets
    teams:string[]; // à modifier avec l'objet Team
    links:string[];
    cv:string;
    picture:string;
}