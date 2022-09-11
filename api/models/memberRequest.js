import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

const MemberRequestSchema = new Schema({
    title: String, // string
    typework: [String], // string
    statusMember: String, // array of strings
    workLoad: String, // array of strings
    missionDescription: String, // array of strings
    technicalSocialsSkills: String, // array of strings
    isUser: Boolean,
    createdAt: Date,
    projects: [{type: SchemaTypes.ObjectId, ref: "Project"}], // array of strings
    members: [{type: SchemaTypes.ObjectId, ref: "Member"}], // array of strings
    id: SchemaTypes.ObjectId, // number
});

export const MemberRequest = model('MemberRequest', MemberRequestSchema);

export default mongoose.Schema.Types.MemberRequest = MemberRequestSchema;
