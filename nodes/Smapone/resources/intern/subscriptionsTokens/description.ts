import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsTokensDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['subscriptionsTokens'],
			},
		},
		options: [
			{
				name: 'Create User Token and Publish via Email',
				value: 'createUserTokenAndPublishViaEmail',
				action: 'Create one or more user token and publish them via email',
			},
			{
				name: 'Get All Tokens for Smap',
				value: 'getAllTokensForSmap',
				action: 'Get all tokens for a smap',
			},
			{
				name: 'Get Token of Smap',
				value: 'getTokenOfSmap',
				action: 'Get a token of a smap',
			},
			{
				name: 'Get User Details',
				value: 'getUserDetails',
				action: 'Get user details',
			},
			{
				name: 'Wipe Token of Smap',
				value: 'wipeTokenOfSmap',
				action: 'Wipe a token of a smap',
			},
		],
		default: 'getAllTokensForSmap',
	},

	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['subscriptionsTokens'],
			},
		},
		description: 'ID of the subscription',
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
				resource: ['subscriptionsTokens'],
				operation: [
					'createUserTokenAndPublishViaEmail',
					'getAllTokensForSmap',
					'getTokenOfSmap',
					'wipeTokenOfSmap',
				],
			},
		},
		description: 'ID of the smap',
	},

	{
		displayName: 'Token ID',
		name: 'tokenId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['subscriptionsTokens'],
				operation: ['getTokenOfSmap', 'wipeTokenOfSmap'],
			},
		},
		description: 'ID of the token',
	},

	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['subscriptionsTokens'],
				operation: ['getUserDetails'],
			},
		},
		description: 'ID of the user',
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
				resource: ['subscriptionsTokens'],
				operation: ['createUserTokenAndPublishViaEmail'],
			},
		},
		description: 'JSON body sent to the API',
	},
];