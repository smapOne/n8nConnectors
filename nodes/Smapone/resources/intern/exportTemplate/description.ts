import type { INodeProperties } from 'n8n-workflow';

export const exportTemplateDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['exportTemplate'],
			},
		},
		options: [
			{
				name: 'Delete Master Export Template of Subscription',
				value: 'deleteMasterExportTemplateOfSubscription',
				action: 'Delete the master export template of the subscription',
			},
			{
				name: 'Get Master Export Template of Subscription',
				value: 'getMasterExportTemplateOfSubscription',
				action: 'Get the master export template of the subscription',
			},
			{
				name: 'Upload Master Export Template for Subscription',
				value: 'uploadMasterExportTemplateForSubscription',
				action: 'Upload a master export template for the subscription',
			},
		],
		default: 'getMasterExportTemplateOfSubscription',
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
				resource: ['exportTemplate'],
				operation: ['uploadMasterExportTemplateForSubscription'],
			},
		},
		description: 'JSON body sent to the API',
	},
];