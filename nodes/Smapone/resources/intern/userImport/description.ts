import type { INodeProperties } from 'n8n-workflow';

export const userImportDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['userImport'],
			},
		},
		options: [
			{
				name: 'Create or Update Users',
				value: 'createOrUpdateUsers',
				action: 'Create or update users',
			},
			{
				name: 'Get All Users by Manager Subscription',
				value: 'getAllUsersByManagerSubscription',
				action: 'Get all users by manager subscription',
			},
		],
		default: 'getAllUsersByManagerSubscription',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['userImport'],
				operation: ['createOrUpdateUsers'],
			},
		},
		description: 'JSON body sent to the API',
	},
];