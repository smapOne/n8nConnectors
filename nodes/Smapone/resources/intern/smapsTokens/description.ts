/*import type { INodeProperties } from 'n8n-workflow';

export const smapsTokensDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTokens'],
			},
		},
		options: [
			{
				name: 'Create Anonymous Token and Publish via Email',
				value: 'createAnonymousTokenAndPublishViaEmail',
				action: 'Create one anonymous token and publish them via email',
			},
			{
				name: 'Create User Token and Publish via Email',
				value: 'createUserTokenAndPublishViaEmail',
				action: 'Create one or more user token and publish them via email',
			},
			{
				name: 'Generate QR Code for Given Smap',
				value: 'generateQrCodeForGivenSmap',
				action: 'Generate a QR code for a given smap',
			},
			{
				name: 'Get All Tokens for Smap',
				value: 'getAllTokensForSmap',
				action: 'Get all tokens for a smap',
			},
			{
				name: 'Get Designer Token',
				value: 'getDesignerToken',
				action: 'Get the designer token',
			},
			{
				name: 'Get Token of Smap',
				value: 'getTokenOfSmap',
				action: 'Get a token of a smap',
			},
			{
				name: 'Send Token as Email',
				value: 'sendTokenAsEmail',
				action: 'Send a token as email',
			},
			{
				name: 'Wipe Group From Smap',
				value: 'wipeGroupFromSmap',
				action: 'Wipe a group from a smap',
			},
			{
				name: 'Wipe Smap',
				value: 'wipeSmap',
				action: 'Wipe a smap',
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
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTokens'],
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
				resource: ['smapsTokens'],
				operation: [
					'generateQrCodeForGivenSmap',
					'getTokenOfSmap',
					'sendTokenAsEmail',
					'wipeTokenOfSmap',
				],
			},
		},
		description: 'ID of the token',
	},

	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTokens'],
				operation: ['wipeGroupFromSmap'],
			},
		},
		description: 'ID of the group',
	},

	{
		displayName: 'Send to User',
		name: 'sendToUser',
		type: 'boolean',
		required: false,
		default: false,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTokens'],
				operation: ['sendTokenAsEmail'],
			},
		},
		description: 'Needed only for user tokens. Set to true if the token should be mailed to the user directely otherwise the creator get all the emails.',
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
				resource: ['smapsTokens'],
				operation: [
					'createAnonymousTokenAndPublishViaEmail',
					'createUserTokenAndPublishViaEmail',
					'sendTokenAsEmail',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];*/