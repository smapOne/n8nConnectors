import type { INodeProperties } from 'n8n-workflow';

export const bricksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bricks'],
			},
		},
		options: [
			{
				name: 'Get Bricks',
				value: 'getBricks',
				action: 'Gets a list of all modules with detailed information on each',
			}
		],
		default: 'getBricks',
	},
];