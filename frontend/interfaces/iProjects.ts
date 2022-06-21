import {IProfil}from "./iProfil";

export interface IProject{
    theme:string;
    title:string;
    description:string;
    links:[string];
    team:[IProfil];
}