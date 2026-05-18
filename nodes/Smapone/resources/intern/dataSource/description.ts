import type { INodeProperties } from 'n8n-workflow';

export const dataSourceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['dataSource'],
			},
		},
		options: [
			{
				name: 'Create New Datasource of Type Static Table',
				value: 'createNewDatasourceOfTypeStaticTable',
				action: 'Create new datasource of type static table',
			},
			{
				name: 'Delete Datasource Including All Source Versions',
				value: 'deleteDatasourceIncludingAllSourceVersions',
				action: 'Delete a datasource including all source versions',
			},
			{
				name: 'Get DataSource With Meta Information',
				value: 'getDataSourceWithMetaInformation',
				action: 'Get a datasource with meta information',
			},
			{
				name: 'Get List With Meta Information of Available Datasource',
				value: 'getListWithMetaInformationOfAvailableDatasource',
				action: 'Get list with meta information of available datasource',
			},
			{
				name: 'Update Title of Data Source',
				value: 'updateTitleOfDataSource',
				action: 'Update the title of a data source',
			},
		],
		default: 'getListWithMetaInformationOfAvailableDatasource',
	},

	{
		displayName: 'Data Source ID',
		name: 'dataSourceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['dataSource'],
				operation: [
					'deleteDatasourceIncludingAllSourceVersions',
					'getDataSourceWithMetaInformation',
					'updateTitleOfDataSource',
				],
			},
		},
		description: 'ID of the data source',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['dataSource'],
				operation: ['createNewDatasourceOfTypeStaticTable'],
			},
		},
		description: 'JSON body sent to the API',
	},

	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['dataSource'],
				operation: ['updateTitleOfDataSource'],
			},
		},
		description: 'New title of the data source',
	},
];