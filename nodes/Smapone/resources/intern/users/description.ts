import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'Create or Update Users',
				value: 'createOrUpdateUsers',
				action: 'Create or update users',
			},
			{
				name: 'Delete Smap User',
				value: 'deleteSmapUser',
				action: 'Delete a smap user',
			},
			{
				name: 'Get All Groups User Is Part Of',
				value: 'getAllGroupsUserIsPartOf',
				action: 'Get all groups in which this user is part of',
			},
			{
				name: 'Get All Users',
				value: 'getAllUsers',
				action: 'Get all users',
			},
			{
				name: 'Get User Details',
				value: 'getUserDetails',
				action: 'Get user details',
			},
		],
		default: 'getAllUsers',
	},

	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['users'],
				operation: [
					'deleteSmapUser',
					'getAllGroupsUserIsPartOf',
					'getUserDetails',
				],
			},
		},
		description: 'ID of the user',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['users'],
				operation: ['createOrUpdateUsers'],
			},
		},
		description: 'JSON body sent to the API',
	},
];