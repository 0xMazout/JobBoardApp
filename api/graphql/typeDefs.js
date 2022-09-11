import {gql} from 'apollo-server'

export const typeDefs = gql` 

    type Project{
            id: ID!
            title: String!
            theme: String!
            description: String!
            links: [String]
            tags: [String]
            team: Team
            isCommercial: Boolean!
            blockchain: String
            createdAt: String!
            updatedAt: String!
            members: [Member]
            membersRequested: [MemberRequest]
            status: String
        }

        type MemberRequest{
            id: ID!
            title: String!
            workProfile: [workProfile]
            missionDescription: String
            workLoad: String
            technicalSocialsSkills: String
            isUser: Boolean!
            user: User
            createdAt: String!
            creator: Project!
        }

        type Member{
            id: ID!
            title: String!
            workProfile: [workProfile]
            description: String!
            isUser: Boolean!
            user: User
            createdAt: String!
            creator: User!
        }
        type workProfile{
            id: ID!
            name: String!
        }
        type User{
            id: ID!
            email: String!
            password: String!
            firstName: String!
            lastName: String!
            registerDate: String!
            biography: String
            profilePicture: String
            projects: [Project]
        }

        type Team{
            id: ID!
            name: String!
            members: [Member]
            teams: [Team]
            projects: [Project]
            createdAt: String!
        }

        input ProjectInput{
            title: String!
            theme: String!
            description: String!
            links: [String]
            tags: [String]
            team: TeamInput
            isCommercial: Boolean!
            blockchain: String
            members: [MemberInput]
            membersRequested: [MemberRequestInput]
            status: String
            createdAt: String!
            updatedAt: String!
        }

        input MemberRequestInput{
            title: String!
            workProfile: [workProfileInput]
            missionDescription: String
            workLoad: String
            technicalSocialsSkills: String
            isUser: Boolean!
            user: UserInput
            createdAt: String!
            creator: ProjectInput!
        }
        input MemberInput{
            title: String!
            workProfile: [workProfileInput]
            description: String!
            isUser: Boolean!
            user: UserInput
            createdAt: String!
            creator: UserInput!
        }
        input workProfileInput{
            name: String!
        }
        input UserInput{
            email: String!
            password: String!
            firstName: String!
            lastName: String!
            registerDate: String!
            biography: String
            profilePicture: String
            projects: [ProjectInput]
        }
        input TeamInput{
            name: String!
            members: [MemberInput]
            teams: [TeamInput]
            projects: [ProjectInput]
            createdAt: String!
        }

        type Query {
            getProject(id: ID!): Project
            getProjects: [Project]
        }
        type Mutation {
            createProject(input: ProjectInput): Project
            deleteProject(id: ID!): Boolean
            updateProject(id: ID!, input: ProjectInput): Boolean
            createMemberRequest(input: MemberRequestInput): MemberRequest
            deleteMemberRequest(id: ID!): Boolean
            updateMemberRequest(id: ID!, input: MemberRequestInput): Boolean
            createMember(input: MemberInput): Member
            deleteMember(id: ID!): Boolean
            updateMember(id: ID!, input: MemberInput): Boolean
            createUser(input: UserInput): User
            deleteUser(id: ID!): Boolean
            updateUser(id: ID!, input: UserInput): Boolean
            createTeam(input: TeamInput): Team
            deleteTeam(id: ID!): Boolean
            updateTeam(id: ID!, input: TeamInput): Boolean
        }
`