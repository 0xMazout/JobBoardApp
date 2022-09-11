import {Project} from "../models/project.js";
import { MemberRequest } from "../models/memberRequest.js";
import { Member } from "../models/member.js";
import { User } from "../models/user.js";
import { Team } from "../models/team.js";
import { WorkProfile } from "../models/workProfile.js";

export const resolver = {
    Query:{
        async getProject(_, {ID}){
            try {
                return await Project.findById(ID);
            } catch (err) {
                throw err;
            }
        },
        async getProjects(){
            try {
                return await Project.find().sort({createdAt: -1});
            } catch (err) {
                throw err;
            }
        }
    },
    Mutation:{
        async createProject(_, {input}){
            try {
                const project = new Project({
                    title: input.title,
                    theme: input.theme,
                    description: input.description,
                    links: input.links,
                    tags: input.tags,
                    team: input.team,
                    isCommercial: input.isCommercial,
                    blockchain: input.blockchain,
                    members: input.members,
                    membersRequested: input.membersRequested,
                    status: input.status,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                });
                const result = await project.save(); // MongoDb Saving
                return { ...result._doc, _id: result.id };
            } catch (err) {
                throw err;
            }
        },
        async deleteProject(_, {ID}){
            try {
                const wasDeleted = (await Project.deleteOne(ID)).deletedCount;
                return wasDeleted;
            } catch (err) {
                throw err;
            }
        },
        async updateProject(_, {ID, input}){
            try {
                const wasEdited = (await Project.updateOne(ID, input)).modifiedCount;
                return wasEdited ;
            } catch (err) {
                throw err;
            }
        },

        async createMemberRequest(_, {input}){
            try{
                const memberRequest = new MemberRequest({
                    title: input.title,
                    workProfile: input.workProfile,
                    missionDescription: input.missionDescription,
                    workLoad: input.workLoad,
                    technicalSocialsSkills: input.technicalSocialsSkills,
                    isUser: input.isUser,
                    user: input.user,
                    createdAt: new Date().toISOString(),
                    creator: input.creator,
                })
                return memberRequest
            }
            catch(err){

            }
        },
        async deleteMemberRequest(_, {ID}){
            try {
                const wasDeleted = (await MemberRequest.deleteOne(ID)).deletedCount;
                return wasDeleted;
            } catch (err) {
                throw err;
            }
        },
        async updateMemberRequest(_, {ID, input}){
            try {
                const wasEdited = (await MemberRequest.updateOne(ID, input)).modifiedCount;
                return wasEdited ;
            } catch (err) {
                throw err;
            }
        },
        async createMember(_, {input}){
            try{
                const member = new Member({
                    title: input.title,
                    workProfile: input.workProfile,
                    description: input.description,
                    isUser: input.isUser,
                    user: input.user,
                    createdAt: new Date().toISOString(),
                    creator: input.creator,
                })
                return member
            }
            catch(err){

            }
        },
        async deleteMember(_, {ID}){
            try {
                const wasDeleted = (await Member.deleteOne(ID)).deletedCount;
                return wasDeleted;
            } catch (err) {
                throw err;
            }
        },
        async updateMember(_, {ID, input}){
            try {
                const wasEdited = (await Member.updateOne(ID, input)).modifiedCount;
                return wasEdited ;
            } catch (err) {
                throw err;
            }
        },
        async createUser(_, {input}){
            try{
                const user = new User({
                    firstname: input.firstname,
                    lastname: input.lastname,
                    pseudo: input.pseudo,
                    biography: input.biography,
                    profilePicture: input.profilePicture,
                    projects: input.projects,
                    email: input.email,
                    team: input.team,
                    tags: input.tags,
                    typeWork: input.typeWork,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                })
                return user
            }
            catch(err){

            }
        },
        async deleteUser(_, {ID}){
            try {
                const wasDeleted = (await User.deleteOne(ID)).deletedCount;
                return wasDeleted;
            } catch (err) {
                throw err;
            }
        },
        async updateUser(_, {ID, input}){
            try {
                const wasEdited = (await User.updateOne(ID, input)).modifiedCount;
                return wasEdited ;
            } catch (err) {
                throw err;
            }
        },
        async createTeam(_, {input}){
            try{
                const team = new Team({
                    title: input.title,
                    description: input.description,
                    members: input.members,
                    projects: input.projects,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                })
                return team
            }
            catch(err){

            }
        },
        async deleteTeam(_, {ID}){
            try {
                const wasDeleted = (await Team.deleteOne(ID)).deletedCount;
                return wasDeleted;
            } catch (err) {
                throw err;
            }
        },
        async updateTeam(_, {ID, input}){
            try {
                const wasEdited = (await Team.updateOne(ID, input)).modifiedCount;
                return wasEdited ;
            } catch (err) {
                throw err;
            }
        },
        async createWorkProfile(_, {input}){
            try{
                const workProfile = new WorkProfile({
                    name: input.name,
                })
                return workProfile
            }
            catch(err){

            }
        },

    }
}