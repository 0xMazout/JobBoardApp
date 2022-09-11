import mongoose from 'mongoose';
import {Team , TeamSchema} from "./team.js";

const { Schema, model, SchemaTypes } = mongoose;
const WorkProfileSchema = new Schema({
    id: SchemaTypes.ObjectId, // number
    name: String, // string
});

export const WorkProfile = model('workProfile', WorkProfileSchema);

export default mongoose.Schema.Types.User = WorkProfileSchema;
