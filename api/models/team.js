import mongoose from 'mongoose';

const { Schema, model, SchemaTypes } = mongoose;
export const TeamSchema = new Schema({
    name: String, // string
    members: [{type: SchemaTypes.ObjectId, ref: "Member"}], // string   
    teams: [{type: SchemaTypes.ObjectId, ref: "Team"}], // array of strings
    projects: [{type: SchemaTypes.ObjectId, ref: "Project"}], // array of strings
    createdAt: Date, // string
    updatedAt: Date, // string
    id: SchemaTypes.ObjectId, // number
});

export const Team = model('Team', TeamSchema);

export const TeamType = mongoose.Schema.Types.Team = TeamSchema;
