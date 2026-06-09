/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
import type { INodeProperties } from 'n8n-workflow';

export const previewSmapsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmaps'],
			},
		},
		options: [
			{
				name: 'Get OData Definition for Smap Versions',
				value: 'getODataDefinitionForSmapVersions',
				action: '[Preview] Get OData definition route for all smap versions',
			},
			{
				name: 'Provide OData EDM Schema Definition',
				value: 'provideODataEdmSchemaDefinition',
				action: '[Preview] Provide OData EDM schema definition',
			},
		],
		default: 'getODataDefinitionForSmapVersions',
	},

	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmaps'],
			},
		},
		description: 'ID of the smap',
	},
];