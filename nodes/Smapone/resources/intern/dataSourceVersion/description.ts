import type { INodeProperties } from 'n8n-workflow';

export const dataSourceVersionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['dataSourceVersion'],
			},
		},
		options: [
			{
				name: 'Retrieve Latest Minor Version of Major Version With Definition and Data Rows',
				value: 'retrieveLatestMinorVersionOfMajorVersionWithDefinitionAndDataRows',
				action: 'Retrieve the latest minor version of this major version with definition and data rows',
			},
			{
				name: 'Retrieve List of Versions of Specific Data Source',
				value: 'retrieveListOfVersionsOfSpecificDataSource',
				action: 'Retrieve the list of versions of a specific data source',
			},
			{
				name: 'Retrieve Specific Version of Data Source',
				value: 'retrieveSpecificVersionOfDataSource',
				action: 'Retrieve the specific version of the data source',
			},
			{
				name: 'Update Static Table in Structure and Data',
				value: 'updateStaticTableInStructureAndData',
				action: 'Update a static table in structure and data',
			},
		],
		default: 'retrieveListOfVersionsOfSpecificDataSource',
	},

	{
		displayName: 'Data Source ID',
		name: 'dataSourceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['dataSourceVersion'],
			},
		},
		description: 'ID of the data source',
	},

	{
		displayName: 'Data Source Version',
		name: 'dataSourceVersion',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['dataSourceVersion'],
				operation: ['retrieveSpecificVersionOfDataSource'],
			},
		},
		description: 'Version of the data source',
	},

	{
		displayName: 'Major Version',
		name: 'majorVersion',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['dataSourceVersion'],
				operation: ['retrieveLatestMinorVersionOfMajorVersionWithDefinitionAndDataRows'],
			},
		},
		description: 'Major version of the data source',
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
				resource: ['dataSourceVersion'],
				operation: ['updateStaticTableInStructureAndData'],
			},
		},
		description: 'JSON body sent to the API',
	},
];