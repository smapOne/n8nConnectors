import type { INodeProperties } from 'n8n-workflow';

export const dataSourceDefinitionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['dataSourceDefinition'],
			},
		},
		options: [
			{
				name: 'Create New Version for Your DataSource',
				value: 'createNewVersionForYourDataSource',
				action: 'Create a new version for your data source',
			},
			{
				name: 'Load Data Source Definition for Given Version',
				value: 'loadDataSourceDefinitionForGivenVersion',
				action: 'Load the data source definition for a given version',
			},
			{
				name: 'Load Values of Data Source for Given Version',
				value: 'loadValuesOfDataSourceForGivenVersion',
				action: 'Load the values of the data source for a given version',
			},
			{
				name: 'Retrieve Latest Minor Version of Major Version With DataSource Definition',
				value: 'retrieveLatestMinorVersionOfMajorVersionWithDataSourceDefinition',
				action: 'Retrieve the latest minor version of this major version with data source definition',
			},
		],
		default: 'retrieveLatestMinorVersionOfMajorVersionWithDataSourceDefinition',
	},

	{
		displayName: 'Data Source ID',
		name: 'dataSourceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['dataSourceDefinition'],
			},
		},
		description: 'ID of the data source',
	},

	{
		displayName: 'Major Version',
		name: 'majorVersion',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['dataSourceDefinition'],
				operation: ['retrieveLatestMinorVersionOfMajorVersionWithDataSourceDefinition'],
			},
		},
		description: 'Major version of the data source',
	},

	{
		displayName: 'Data Source Version',
		name: 'dataSourceVersion',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['dataSourceDefinition'],
				operation: [
					'loadDataSourceDefinitionForGivenVersion',
					'loadValuesOfDataSourceForGivenVersion',
					'createNewVersionForYourDataSource',
				],
			},
		},
		description: 'Version of the data source',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['dataSourceDefinition'],
				operation: ['createNewVersionForYourDataSource'],
			},
		},
		description: 'JSON body sent to the API',
	},
];