/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
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
				action: '[Preview] Delete a single data record',
			},
			{
				name: '[Preview] Export Data Records as Excel',
				value: 'exportDataRecordsAsExcel',
				action: '[Preview] Export data records as Excel',
			},
			{
				name: '[Preview] Export Data Records as PDF',
				value: 'exportDataRecordsAsPdf',
				action: '[Preview] Export data records as PDF',
			},
			{
				name: '[Preview] Export Data Records as PDF for Specific Slot',
				value: 'exportDataRecordsAsPdfForSpecificSlot',
				action: '[Preview] Export data records as PDF for specific slot',
			},
			{
				name: '[Preview] Get All Files Meta Data',
				value: 'getAllFilesMetaData',
				action: '[Preview] Get all files meta data',
			},
			{
				name: '[Preview] Load All Data Records for Major Version',
				value: 'loadAllDataRecordsForMajorVersion',
				action: '[Preview] Load all data records for major version',
			},
			{
				name: '[Preview] Load All Data Records for Smap',
				value: 'loadAllDataRecordsForSmap',
				action: '[Preview] Load all data records for smap',
			},
			{
				name: '[Preview] Load File for Specific Data Record',
				value: 'loadFileForSpecificDataRecord',
				action: '[Preview] Load file for specific data record',
			},
			{
				name: '[Preview] Load Report for Specific Data Record',
				value: 'loadReportForSpecificDataRecord',
				action: '[Preview] Load report for specific data record',
			},
			{
				name: '[Preview] Load Single Data Record',
				value: 'loadSingleDataRecord',
				action: '[Preview] Load single data record',
			},
		],
		default: 'loadAllDataRecordsForSmap',
	},

	{
		displayName: 'Output Format',
		name: 'outputFormat',
		type: 'options',
		options: [
			{
				name: 'JSON',
				value: 'Json',
			},
			{
				name: 'XML',
				value: 'Xml',
			},
			{
				name: 'PDF',
				value: 'Pdf',
			},
		],
		default: 'Json',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsRecords'],
				operation: ['loadAllDataRecordsForSmap', 'loadAllDataRecordsForMajorVersion'],
			},
		},
		description: 'Output format for the data records response',
	},

	{
		displayName: 'Record Output Format',
		name: 'recordOutputFormat',
		type: 'options',
		options: [
			{
				name: 'DOC',
				value: 'Doc',
			},
			{
				name: 'DOCX',
				value: 'Docx',
			},
			{
				name: 'HTML',
				value: 'Html',
			},
			{
				name: 'JSON',
				value: 'Json',
			},
			{
				name: 'PDF',
				value: 'Pdf',
			},
			{
				name: 'TXT',
				value: 'Txt',
			},
			{
				name: 'XML',
				value: 'Xml',
			},
		],
		default: 'Json',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsRecords'],
				operation: ['loadSingleDataRecord'],
			},
		},
		description: 'Output format for the single data record response',
	},

	{
		displayName: 'Report Output Format',
		name: 'reportOutputFormat',
		type: 'options',
		options: [
			{
				name: 'PDF',
				value: 'Pdf',
			},
			{
				name: 'DOC',
				value: 'Doc',
			},
			{
				name: 'DOCX',
				value: 'Docx',
			},
		],
		default: 'Pdf',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsRecords'],
				operation: ['loadReportForSpecificDataRecord'],
			},
		},
		description: 'Output format for the report download',
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
		default: 1,
		required: true,
		displayOptions: {
			show: {
				resource: ['previewSmapsRecords'],
				operation: ['exportDataRecordsAsPdfForSpecificSlot'],
			},
		},
		description: 'The slot position of a report template (1 - main report, 2 - additional report)',
	},

	{
		displayName: 'Smap Name',
		name: 'smapName',
		type: 'string',
		default: 'smapone-export',
		required: true,
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsRecords'],
				operation: [
					'exportDataRecordsAsExcel',
					'exportDataRecordsAsPdf',
					'exportDataRecordsAsPdfForSpecificSlot',
				],
			},
		},
		description: 'Name used for the generated download file',
	},
];
