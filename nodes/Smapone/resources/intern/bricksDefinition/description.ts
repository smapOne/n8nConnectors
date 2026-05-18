import type { INodeProperties } from 'n8n-workflow';

export const bricksDefinitionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bricksDefinition'],
			},
		},
		options: [
			{
				name: 'Get Bricks Definition',
				value: 'getBricksDefinition',
				action: 'Gets the brick definition model',
			}
		],
		default: 'getBricksDefinition',
	},
];