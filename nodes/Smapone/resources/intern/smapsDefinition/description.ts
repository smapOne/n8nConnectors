import type { INodeProperties } from 'n8n-workflow';

export const smapsDefinitionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['smapsDefinition'],
			},
		},
		options: [
			{
				name: 'Get Template for Smap',
				value: 'getTemplateForSmap',
				action: 'Get the template for a smap',
			},
			{
				name: 'Load Definition for Smap',
				value: 'loadDefinitionForSmap',
				action: 'Load the definition for a smap',
			},
			{
				name: 'Overwrite Definition of Given Smap',
				value: 'overwriteDefinitionOfGivenSmap',
				action: 'Overwrite the definition of a given smap',
			},
			{
				name: 'Validate Definition of Given Smap',
				value: 'validateDefinitionOfGivenSmap',
				action: 'Validate the definition of a given smap',
			},
		],
		default: 'loadDefinitionForSmap',
	},

	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['smapsDefinition'],
			},
		},
		description: 'ID of the smap',
	},

	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['smapsDefinition'],
				operation: ['getTemplateForSmap', 'loadDefinitionForSmap'],
			},
		},
		description: 'Version of the smap',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['smapsDefinition'],
				operation: [
					'overwriteDefinitionOfGivenSmap',
					'validateDefinitionOfGivenSmap',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];