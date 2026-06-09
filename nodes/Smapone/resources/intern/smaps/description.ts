import type { INodeProperties } from 'n8n-workflow';

export const smapsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { 
			show: { 
				apiScope: ['intern'],
				resource: ['smaps'] 
			} 
		},
		options: [
			{ name: 'Create Empty App or Create by Template', value: 'createEmptyAppOrCreateByTemplate', action: 'Create an empty app or create by a template' },
			{ name: 'Delete Specific Smap Including References', value: 'deleteSpecificSmapIncludingReferences', action: 'Delete a specific smap including referenced datasources licenses and records' },
			{ name: 'Get All Smap Versions', value: 'getAllSmapVersions', action: 'Get all smap versions' },
			{ name: 'Get All Users With Tokens for Specific Smap', value: 'getAllUsersWithTokensForSpecificSmap', action: 'Get all users with tokens for a specific smap' },
			{ name: 'Get Details for Specific Smap', value: 'getDetailsForSpecificSmap', action: 'Get details for a specific smap' },
			{ name: 'Get List of All Smaps', value: 'getListOfAllSmaps', action: 'Get the list of all smaps' },
		],
		default: 'getListOfAllSmaps',
	},
	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: [
					'deleteSpecificSmapIncludingReferences',
					'getAllSmapVersions',
					'getAllUsersWithTokensForSpecificSmap',
					'getDetailsForSpecificSmap',
				],
			},
		},
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
				resource: ['smaps'],
				operation: [
					'createEmptyAppOrCreateByTemplate',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];