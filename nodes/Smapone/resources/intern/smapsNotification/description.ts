import type { INodeProperties } from 'n8n-workflow';

export const smapsNotificationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsNotification'],
			},
		},
		options: [
			{
				name: 'Get Configured Webhook Information',
				value: 'getConfiguredWebhookInformation',
				action: 'Get the configured webhook information',
			},
			{
				name: 'Overwrite Webhook Configuration',
				value: 'overwriteWebhookConfiguration',
				action: 'Overwrite the webhook configuration',
			},
			{
				name: 'Remove Webhook Configuration',
				value: 'removeWebhookConfiguration',
				action: 'Remove the webhook configuration',
			},
		],
		default: 'getConfiguredWebhookInformation',
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
				resource: ['smapsNotification'],
			},
		},
		description: 'ID of the smap',
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
				resource: ['smapsNotification'],
				operation: ['overwriteWebhookConfiguration'],
			},
		},
		description: 'JSON body sent to the API',
	},
];