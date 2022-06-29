import {IProfil}from "./iProfil";

export interface IProject{
    title:string;
    theme:string;
    description:string;
    links:string[];
    team:number[];//Actually contain id team number //IProfil
}