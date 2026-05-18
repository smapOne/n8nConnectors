import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Delete Setting',
				value: 'deleteSetting',
				action: 'Delete a setting',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get account information',
			},
			{
				name: 'Get Has Subscription Access Grants',
				value: 'getHasSubscriptionAccessGrants',
				action: 'Get accessible subscriptions',
			},
			{
				name: 'Get Setting',
				value: 'getSetting',
				action: 'Read a single settings value',
			},
			{
				name: 'Get Settings',
				value: 'getSettings',
				action: 'Read all keys',
			},
			{
				name: 'Get Stats',
				value: 'getStats',
				action: 'Get account statistics',
			},
			{
				name: 'Update Setting',
				value: 'updateSetting',
				action: 'Update a settings value',
			},
		],
		default: 'get',
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getSetting', 'updateSetting', 'deleteSetting'],
			},
		},
		description: 'Settings key',
	},

	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateSetting'],
			},
		},
		description: 'New settings value',
	},
];