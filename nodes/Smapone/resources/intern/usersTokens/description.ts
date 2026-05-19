import type { INodeProperties } from 'n8n-workflow';

export const usersTokensDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['usersTokens'],
			},
		},
		options: [
			{
				name: 'Generate QR Code for Given Smap',
				value: 'generateQrCodeForGivenSmap',
				action: 'Generate a QR code for a given smap',
			},
			{
				name: 'Get User Details',
				value: 'getUserDetails',
				action: 'Get user details',
			},
			{
				name: 'Wipe All User Tokens',
				value: 'wipeAllUserTokens',
				action: 'Wipe all user tokens',
			},
		],
		default: 'getUserDetails',
	},

	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['usersTokens'],
			},
		},
		description: 'ID of the user',
	},

	{
		displayName: 'Token ID',
		name: 'tokenId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['usersTokens'],
				operation: ['generateQrCodeForGivenSmap'],
			},
		},
		description: 'ID of the token',
	},
];