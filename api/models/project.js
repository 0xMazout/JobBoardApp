import mongoose from 'mongoose';
import {Team} from "./team.js";
import {Member} from "./member.js";
import {MemberRequest} from "./memberRequest.js";
const { Schema, model, SchemaTypes } = mongoose;

const ProjectSchema = new Schema({
    id: SchemaTypes.ObjectId, // number
    title: String, // string
    theme: String, // string
    description:  String, // string
    links: [String], // array of strings
    team: [[{type: SchemaTypes.ObjectId, ref: "Team"}]], // array of strings
    tags: [String], // array of strings
    isCommercial: Boolean, // boolean
    members: [[{type: SchemaTypes.ObjectId, ref: "Member"}]], // array of strings
    membersRequested: [{type: SchemaTypes.ObjectId, ref: "MemberRequest"}], // array of strings
    blockChain: String, // string
    createdAt: Date, // string
    updatedAt: Date, // string
    status: String, // string
});

export const Project = model('Project', ProjectSchema);

export const ProjectType = mongoose.Schema.Types.Project = ProjectSchema;
