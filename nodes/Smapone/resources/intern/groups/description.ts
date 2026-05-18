import type { INodeProperties } from 'n8n-workflow';

export const groupsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groups'],
			},
		},
		options: [
			{
				name: 'Add Smap to Group',
				value: 'addSmapToGroup',
				action: 'Add a smap to a group',
			},
			{
				name: 'Add User to Group',
				value: 'addUserToGroup',
				action: 'Add a user to a group',
			},
			{
				name: 'Create Empty Group',
				value: 'createEmptyGroup',
				action: 'Create an empty group',
			},
			{
				name: 'Delete Group',
				value: 'deleteGroup',
				action: 'Delete a group',
			},
			{
				name: 'Delete Smap From Group',
				value: 'deleteSmapFromGroup',
				action: 'Delete a smap from a group',
			},
			{
				name: 'Edit Group',
				value: 'editGroup',
				action: 'Edit a group',
			},
			{
				name: 'Edit Group Comment',
				value: 'editGroupComment',
				action: 'Edit a group comment',
			},
			{
				name: 'Get All Groups',
				value: 'getAllGroups',
				action: 'Get all groups',
			},
			{
				name: 'Get Details of Group With Members',
				value: 'getDetailsOfGroupWithMembers',
				action: 'Get details of a group with all members',
			},
			{
				name: 'Remove User From Group and Assigned Smaps',
				value: 'removeUserFromGroupAndAssignedSmaps',
				action: 'Remove a user from the group and assigned smaps',
			},
		],
		default: 'getAllGroups',
	},

	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: [
					'getDetailsOfGroupWithMembers',
					'editGroup',
					'deleteGroup',
					'editGroupComment',
					'addUserToGroup',
					'removeUserFromGroupAndAssignedSmaps',
					'addSmapToGroup',
					'deleteSmapFromGroup',
				],
			},
		},
		description: 'ID of the group',
	},

	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: [
					'addUserToGroup',
					'removeUserFromGroupAndAssignedSmaps',
				],
			},
		},
		description: 'ID of the user',
	},

	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['addSmapToGroup', 'deleteSmapFromGroup'],
			},
		},
		description: 'ID of the smap',
	},

	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['editGroupComment'],
			},
		},
		description: 'New comment of the group',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['createEmptyGroup', 'editGroup'],
			},
		},
		description: 'JSON body sent to the API',
	},
];