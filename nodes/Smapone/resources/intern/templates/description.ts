import type { INodeProperties } from 'n8n-workflow';

export const templatesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['templates'],
			},
		},
		options: [
			{
				name: 'Get All Available App Icon Templates',
				value: 'getAllAvailableAppIconTemplates',
				action: 'Get all available app icon templates',
			},
			{
				name: 'Get All Available Company Smap Templates',
				value: 'getAllAvailableCompanySmapTemplates',
				action: 'Get all available company smap templates',
			},
			{
				name: 'Get All Available Smap Templates',
				value: 'getAllAvailableSmapTemplates',
				action: 'Get all available smap templates',
			},
		],
		default: 'getAllAvailableSmapTemplates',
	},
];