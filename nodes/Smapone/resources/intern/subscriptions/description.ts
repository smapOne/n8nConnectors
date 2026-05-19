import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriptions'],
			},
		},
		options: [
			{
				name: 'Add Smap to Group',
				value: 'addSmapToGroup',
				action: 'Add a smap to a group',
			},
			{
				name: 'Delete Smap From Group',
				value: 'deleteSmapFromGroup',
				action: 'Delete a smap from a group',
			},
			{
				name: 'Get All Groups',
				value: 'getAllGroups',
				action: 'Get all groups',
			},
			{
				name: 'Get All Users',
				value: 'getAllUsers',
				action: 'Get all users',
			},
			{
				name: 'Get All Users With Tokens for Specific Smap',
				value: 'getAllUsersWithTokensForSpecificSmap',
				action: 'Get all users with tokens for a specific smap',
			},
			{
				name: 'Get Details for Specific Managed Subscription',
				value: 'getDetailsForSpecificManagedSubscription',
				action: 'Get details for a specific managed subscription',
			},
			{
				name: 'Get Details of Group With Members',
				value: 'getDetailsOfGroupWithMembers',
				action: 'Get details of a group with a list of all members',
			},
			{
				name: 'Get List of All Managed Subscriptions',
				value: 'getListOfAllManagedSubscriptions',
				action: 'Get the list of all managed subscriptions',
			},
			{
				name: 'Get List of All Smaps',
				value: 'getListOfAllSmaps',
				action: 'Get the list of all smaps',
			},
			{
				name: 'Get User Details',
				value: 'getUserDetails',
				action: 'Get user details',
			},
		],
		default: 'getListOfAllManagedSubscriptions',
	},

	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['subscriptions'],
				operation: [
					'addSmapToGroup',
					'deleteSmapFromGroup',
					'getAllGroups',
					'getAllUsers',
					'getAllUsersWithTokensForSpecificSmap',
					'getDetailsForSpecificManagedSubscription',
					'getDetailsOfGroupWithMembers',
					'getListOfAllSmaps',
					'getUserDetails',
				],
			},
		},
		description: 'ID of the subscription',
	},

	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['subscriptions'],
				operation: [
					'addSmapToGroup',
					'deleteSmapFromGroup',
					'getDetailsOfGroupWithMembers',
				],
			},
		},
		description: 'ID of the group',
	},

	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['subscriptions'],
				operation: [
					'addSmapToGroup',
					'deleteSmapFromGroup',
					'getAllUsersWithTokensForSpecificSmap',
				],
			},
		},
		description: 'ID of the smap',
	},

	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['subscriptions'],
				operation: ['getUserDetails'],
			},
		},
		description: 'ID of the user',
	},
];