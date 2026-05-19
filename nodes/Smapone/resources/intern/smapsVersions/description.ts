import type { INodeProperties } from 'n8n-workflow';

export const smapsVersionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsVersions'],
			},
		},
		options: [
			{
				name: 'Delete Certain Version of Smap',
				value: 'deleteCertainVersionOfSmap',
				action: 'Delete a certain version of a smap',
			},
			{
				name: 'Get All Smap Versions',
				value: 'getAllSmapVersions',
				action: 'Get all smap versions',
			},
			{
				name: 'Get Specific Smap Version',
				value: 'getSpecificSmapVersion',
				action: 'Get a specific smap version',
			},
			{
				name: 'Load Schema for Data Record',
				value: 'loadSchemaForDataRecord',
				action: 'Load a schema for a data record to the specified version',
			},
			{
				name: 'Publish Smap',
				value: 'publishSmap',
				action: 'Publish a smap',
			},
			{
				name: 'Update All Data Sources to Latest Minor Version',
				value: 'updateAllDataSourcesToLatestMinorVersion',
				action: 'Update all data sources to the latest minor version',
			},
		],
		default: 'getAllSmapVersions',
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
				resource: ['smapsVersions'],
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
				apiScope: ['intern'],
				resource: ['smapsVersions'],
				operation: [
					'deleteCertainVersionOfSmap',
					'getSpecificSmapVersion',
					'loadSchemaForDataRecord',
				],
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
				apiScope: ['intern'],
				resource: ['smapsVersions'],
				operation: [
					'publishSmap',
					'updateAllDataSourcesToLatestMinorVersion',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];