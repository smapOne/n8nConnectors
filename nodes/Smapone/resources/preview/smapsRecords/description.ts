import type { INodeProperties } from 'n8n-workflow';

export const previewSmapsRecordsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsRecords'],
			},
		},
		options: [
			{
				name: '[Preview] Delete Single Data Record',
				value: 'deleteSingleDataRecord',
				action: 'Delete a single data record',
			},
			{
				name: '[Preview] Export Data Records as Excel',
				value: 'exportDataRecordsAsExcel',
				action: 'Export data records as Excel',
			},
			{
				name: '[Preview] Export Data Records as PDF',
				value: 'exportDataRecordsAsPdf',
				action: 'Export data records as PDF',
			},
			{
				name: '[Preview] Export Data Records as PDF for Specific Slot',
				value: 'exportDataRecordsAsPdfForSpecificSlot',
				action: 'Export data records as PDF for specific slot',
			},
			{
				name: '[Preview] Get All Files Meta Data',
				value: 'getAllFilesMetaData',
				action: 'Get all files meta data',
			},
			{
				name: '[Preview] Load All Data Records for Current Version',
				value: 'loadAllDataRecordsForCurrentVersion',
				action: 'Load all data records for current version',
			},
			{
				name: '[Preview] Load All Data Records for Major Version',
				value: 'loadAllDataRecordsForMajorVersion',
				action: 'Load all data records for major version',
			},
			{
				name: '[Preview] Load All Data Records for Smap',
				value: 'loadAllDataRecordsForSmap',
				action: 'Load all data records for smap',
			},
			{
				name: '[Preview] Load File for Specific Data Record',
				value: 'loadFileForSpecificDataRecord',
				action: 'Load file for specific data record',
			},
			{
				name: '[Preview] Load Report for Specific Data Record',
				value: 'loadReportForSpecificDataRecord',
				action: 'Load report for specific data record',
			},
			{
				name: '[Preview] Load Single Data Record',
				value: 'loadSingleDataRecord',
				action: 'Load single data record',
			},
		],
		default: 'loadAllDataRecordsForSmap',
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
				resource: ['previewSmapsRecords'],
			},
		},
	},

	{
		displayName: 'Major Version',
		name: 'majorVersion',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: [
					'exportDataRecordsAsExcel',
					'exportDataRecordsAsPdf',
					'exportDataRecordsAsPdfForSpecificSlot',
					'loadAllDataRecordsForMajorVersion',
				],
			},
		},
	},

	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: [
					'loadSingleDataRecord',
					'deleteSingleDataRecord',
					'loadReportForSpecificDataRecord',
					'getAllFilesMetaData',
					'loadFileForSpecificDataRecord',
				],
			},
		},
	},

	{
		displayName: 'Record ID',
		name: 'recordId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: [
					'loadSingleDataRecord',
					'deleteSingleDataRecord',
					'loadReportForSpecificDataRecord',
					'getAllFilesMetaData',
					'loadFileForSpecificDataRecord',
				],
			},
		},
	},

	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: ['loadFileForSpecificDataRecord'],
			},
		},
	},

	{
		displayName: 'Report Template ID',
		name: 'reportTemplateId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: ['loadReportForSpecificDataRecord'],
			},
		},
	},

	{
		displayName: 'Slot Position',
		name: 'slotPosition',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: ['exportDataRecordsAsPdfForSpecificSlot'],
			},
		},
	},
];