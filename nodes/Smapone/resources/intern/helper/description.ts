import type { INodeProperties } from 'n8n-workflow';

export const helperDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['helper'],
			},
		},
		options: [
			{
				name: 'Match Given Examples Against Regular Expression',
				value: 'matchGivenExamplesAgainstRegularExpression',
				action: 'Match all given examples against given regular expression',
			},
		],
		default: 'matchGivenExamplesAgainstRegularExpression',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['helper'],
				operation: ['matchGivenExamplesAgainstRegularExpression'],
			},
		},
		description: 'JSON body sent to the API',
	},
];