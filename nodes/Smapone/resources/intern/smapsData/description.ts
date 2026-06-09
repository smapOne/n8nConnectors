import type { INodeProperties } from 'n8n-workflow';

export const smapsDataDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
			},
		},
		options: [
			{
				name: 'Create Task for Given Version',
				value: 'createTaskForGivenVersion',
				action: 'Create a task for a given version',
			},
			{
				name: 'Delete Records of Version',
				value: 'deleteRecordsOfVersion',
				action: 'Delete records of a version',
			},
			{
				name: 'Delete Single Data Record',
				value: 'deleteSingleDataRecord',
				action: 'Delete a single data record',
			},
			{
				name: 'Fill Template With Dummy Data',
				value: 'fillTemplateWithDummyData',
				action: 'Fill the template with dummy data',
			},
			{
				name: 'Generate Dummy Record',
				value: 'generateDummyRecord',
				action: 'Generate a dummy record',
			},
			{
				name: 'Get All Files Meta Data for Specific Data Record',
				value: 'getAllFilesMetaDataForSpecificDataRecord',
				action: 'Get all files meta data for a specific data record',
			},
			{
				name: 'Load All Data Records for All Versions',
				value: 'loadAllDataRecordsForAllVersions',
				action: 'Load all data records for all versions of the smap',
			},
			{
				name: 'Load All Data Records for All Versions as Format',
				value: 'loadAllDataRecordsForAllVersionsAsFormat',
				action: 'Load all data records for all versions of the smap as format',
			},
			{
				name: 'Load All Data Records for Current Published Version',
				value: 'loadAllDataRecordsForCurrentPublishedVersion',
				action: 'Load all data records for the currently published version',
			},
			{
				name: 'Load All Data Records for Current Published Version as Format',
				value: 'loadAllDataRecordsForCurrentPublishedVersionAsFormat',
				action: 'Load all data records for the currently published version as format',
			},
			{
				name: 'Load All Data Records for Given Major Version',
				value: 'loadAllDataRecordsForGivenMajorVersion',
				action: 'Load all data records of all minor versions for a given major version',
			},
			{
				name: 'Load All Data Records for Given Major Version as Format',
				value: 'loadAllDataRecordsForGivenMajorVersionAsFormat',
				action: 'Load all data records of all minor versions for a given major version as format',
			},
			{
				name: 'Load All Data Records for Given Version',
				value: 'loadAllDataRecordsForGivenVersion',
				action: 'Load all data records for a given version',
			},
			{
				name: 'Load All Data Records for Given Version as Format',
				value: 'loadAllDataRecordsForGivenVersionAsFormat',
				action: 'Load all data records for a given version as format',
			},
			{
				name: 'Load File for Specific Data Record',
				value: 'loadFileForSpecificDataRecord',
				action: 'Load a file for a specific data record',
			},
			{
				name: 'Load Single Data Record',
				value: 'loadSingleDataRecord',
				action: 'Load a single data record',
			},
			{
				name: 'Load Single Data Record as Format',
				value: 'loadSingleDataRecordAsFormat',
				action: 'Load a single data record as format',
			},
		],
		default: 'loadAllDataRecordsForAllVersions',
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
				resource: ['smapsData'],
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
				resource: ['smapsData'],
				operation: [
					'createTaskForGivenVersion',
					'deleteRecordsOfVersion',
					'deleteSingleDataRecord',
					'fillTemplateWithDummyData',
					'generateDummyRecord',
					'getAllFilesMetaDataForSpecificDataRecord',
					'loadAllDataRecordsForGivenVersion',
					'loadAllDataRecordsForGivenVersionAsFormat',
					'loadFileForSpecificDataRecord',
					'loadSingleDataRecord',
					'loadSingleDataRecordAsFormat',
				],
			},
		},
		description: 'Version of the smap',
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
				resource: ['smapsData'],
				operation: [
					'loadAllDataRecordsForGivenMajorVersion',
					'loadAllDataRecordsForGivenMajorVersionAsFormat',
				],
			},
		},
		description: 'Major version of the smap',
	},

	{
		displayName: 'Mark as Exported',
		name: 'markAsExported',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'loadAllDataRecordsForAllVersions',
					'loadAllDataRecordsForAllVersionsAsFormat',
					'loadAllDataRecordsForCurrentPublishedVersion',
					'loadAllDataRecordsForCurrentPublishedVersionAsFormat',
					'loadAllDataRecordsForGivenVersion',
					'loadAllDataRecordsForGivenVersionAsFormat',
					'loadAllDataRecordsForGivenMajorVersion',
					'loadAllDataRecordsForGivenMajorVersionAsFormat',
					'loadSingleDataRecord',
					'loadSingleDataRecordAsFormat',
				],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'Mark read records as exported',
	},

	{
		displayName: 'Generate Random Values',
		name: 'generateRandomValues',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'generateDummyRecord',
				],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'True if the generated record should contain random data or false to create static data based on the definition',
	},

	{
		displayName: 'Output Format',
		name: 'format',
		type: 'options',
		options: [
			{
				name: 'JSON',
				value: 'Json',
			},
			{
				name: 'PDF',
				value: 'Pdf',
			},
			{
				name: 'XML',
				value: 'Xml',
			},
		],
		default: 'Json',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'loadAllDataRecordsForAllVersions',
					'loadAllDataRecordsForAllVersionsAsFormat',
					'loadAllDataRecordsForCurrentPublishedVersion',
					'loadAllDataRecordsForCurrentPublishedVersionAsFormat',
					'loadAllDataRecordsForGivenVersion',
					'loadAllDataRecordsForGivenVersionAsFormat',
					'loadAllDataRecordsForGivenMajorVersion',
					'loadAllDataRecordsForGivenMajorVersionAsFormat',
					'loadSingleDataRecord',
					'loadSingleDataRecordAsFormat',
					'fillTemplateWithDummyData',
				],
			},
		},
		description: 'Output Format(.JSON, .xml or .pdf), Default is JSON. Available values : JSON, Pdf, Xml.',
	},

	{
		displayName: 'Record State Filter',
		name: 'state',
		type: 'options',
		options: [
			{
				name: 'New',
				value: 'New',
			},
			{
				name: 'Exported',
				value: 'Exported',
			},
			{
				name: 'Incomplete',
				value: 'Incomplete',
			},
		],
		default: 'New',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'loadAllDataRecordsForAllVersions',
					'loadAllDataRecordsForAllVersionsAsFormat',
					'loadAllDataRecordsForCurrentPublishedVersion',
					'loadAllDataRecordsForCurrentPublishedVersionAsFormat',
					'loadAllDataRecordsForGivenVersion',
					'loadAllDataRecordsForGivenVersionAsFormat',
					'deleteRecordsOfVersion',
					'loadAllDataRecordsForGivenMajorVersion',
					'loadAllDataRecordsForGivenMajorVersionAsFormat',
				],
			},
		},
		description: 'Filter the records for state new = 1, exported = 2 or incomplete = 3',
	},

	{
		displayName: 'Record ID',
		name: 'recordId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'deleteSingleDataRecord',
					'getAllFilesMetaDataForSpecificDataRecord',
					'loadFileForSpecificDataRecord',
					'loadSingleDataRecord',
					'loadSingleDataRecordAsFormat',
				],
			},
		},
		description: 'ID of the data record',
	},

	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: ['loadFileForSpecificDataRecord'],
			},
		},
		description: 'ID of the file',
	},

	{
		displayName: 'Use Default',
		name: 'useDefault',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsData'],
				operation: [
					'loadSingleDataRecord',
					'loadSingleDataRecordAsFormat',
				],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'If true a new template is generated and the uploaded app template will be ignored',
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
				resource: ['smapsData'],
				operation: ['createTaskForGivenVersion'],
			},
		},
		description: 'JSON body sent to the API',
	},
];