import type { INodeProperties } from 'n8n-workflow';

export const externalScimDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['external'],
				resource: ['externalScim'],
			},
		},
		options: [
			{
				name: '[External] Create New Group',
				value: 'createNewGroup',
				action: '[External] Create a new group',
			},
			{
				name: '[External] Create New User',
				value: 'createNewUser',
				action: '[External] Create a new user with or without roles',
			},
			{
				name: '[External] Delete Group by Identifier',
				value: 'deleteGroupByIdentifier',
				action: '[External] Delete a group by identifier',
			},
			{
				name: '[External] Delete User by Identifier',
				value: 'deleteUserByIdentifier',
				action: '[External] Delete a user by identifier',
			},
			{
				name: '[External] Get Group by Identifier',
				value: 'getGroupByIdentifier',
				action: '[External] Get a group by identifier',
			},
			{
				name: '[External] Get Group List by Filter',
				value: 'getGroupListByFilter',
				action: '[External] Get a group list by provided filter',
			},
			{
				name: '[External] Get User by Identifier',
				value: 'getUserByIdentifier',
				action: '[External] Get a user by identifier',
			},
			{
				name: '[External] Get User List by Filter',
				value: 'getUserListByFilter',
				action: '[External] Get the list of users by filter',
			},
			{
				name: '[External] Update Group Details or Members',
				value: 'updateGroupDetailsOrMembers',
				action: '[External] Update group details or group members',
			},
			{
				name: '[External] Update User Details or Role',
				value: 'updateUserDetailsOrRole',
				action: '[External] Update user details or user role',
			},
		],
		default: 'getUserListByFilter',
	},

	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['external'],
				resource: ['externalScim'],
				operation: [
					'deleteGroupByIdentifier',
					'deleteUserByIdentifier',
					'getGroupByIdentifier',
					'getUserByIdentifier',
					'updateGroupDetailsOrMembers',
					'updateUserDetailsOrRole',
				],
			},
		},
		description: 'Identifier of the SCIM group or user',
	},

	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				apiScope: ['external'],
				resource: ['externalScim'],
				operation: ['getGroupListByFilter', 'getUserListByFilter'],
			},
		},
		description: 'SCIM filter expression',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				apiScope: ['external'],
				resource: ['externalScim'],
				operation: [
					'createNewGroup',
					'createNewUser',
					'updateGroupDetailsOrMembers',
					'updateUserDetailsOrRole',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];