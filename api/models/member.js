import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

const MemberSchema = new Schema({
    pseudo: String, // string
    user: [{type: SchemaTypes.ObjectId, ref: "User"}], // string   
    team: [{type: SchemaTypes.ObjectId, ref: "Team"}], // array of strings
    typeWork: [String], // array of strings
    Projects: [{type: SchemaTypes.ObjectId, ref: "Project"}], // array of strings
    createdAt: Date, // string
    updatedAt: Date, // string
    id: SchemaTypes.ObjectId, // number
});

export const Member = model('Member', MemberSchema);

export default mongoose.Schema.Types.Member = MemberSchema;
