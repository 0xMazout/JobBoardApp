import mongoose from 'mongoose';
import {Team , TeamSchema} from "./team.js";

const { Schema, model, SchemaTypes } = mongoose;
const UserSchema = new Schema({
    firstname: String, // string
    lastname: String, // string
    pseudo: String,
    biography:  String, // string
    profilePicture: String, // string
    projects: [{type: SchemaTypes.ObjectId, ref: "Project"}], 
    email: String, // array of strings
    team: [{type: SchemaTypes.ObjectId, ref: "Team" }], 
    tags: [String], // array of strings
    typeWork: [String], // array of strings
    createdAt: Date, // string
    updatedAt: Date, // string
    id: SchemaTypes.ObjectId, // number
});

export const User = model('User', UserSchema);

export default mongoose.Schema.Types.User = UserSchema;
