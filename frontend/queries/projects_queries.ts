import {gql} from "@apollo/client";

export const GET_PROJECTS = gql`
	query GetProjects {
		projects {
			id
			title
			theme
			description
			links
			tags
			team
			isCommercial
			blockchain
			createdAt
			updatedAt
			members
			membersRequested
			status
		}
	}
`;

export const GET_PROJECT = gql`
	query GetProject($id: ID!) {
		project(id: $id) {
			id
			title
			theme
			description
			links
			tags
			team
			isCommercial
			blockchain
			createdAt
			updatedAt
			members
			membersRequested
			status
		}
	}
`;

export const CREATE_PROJECT = gql`
	mutation CreateProject(
        $project: ProjectInput!
	) {
		createProject(project: $project) {
            id
            title
            theme
            description
            links
            tags
            team
            isCommercial
            blockchain
            createdAt
            updatedAt
            members
            membersRequested
            status
		}
	}
`;
export const UPDATE_PROJECT = gql`
	mutation UpdateProject(
		$id: ID!
        $project: ProjectInput!
	) {
		updateProject(
			id: $id
            project: $project
		) {
            id
            title
            theme
            description
            links
            tags
            team
            isCommercial
            blockchain
            createdAt
            updatedAt
            members
            membersRequested
            status
		}
	}
`;

export const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
		}
	}
`;

export const ProjectInput = gql`
	input ProjectInput {
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
`;
