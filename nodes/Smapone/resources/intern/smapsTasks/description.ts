import type { INodeProperties } from 'n8n-workflow';

export const smapsTasksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTasks'],
			},
		},
		options: [
			{
				name: 'Change State of Task and Assign Task to User',
				value: 'changeStateOfTaskAndAssignTaskToUser',
				action: 'Change the state of a task and assign a task to a user',
			},
		],
		default: 'changeStateOfTaskAndAssignTaskToUser',
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
				resource: ['smapsTasks'],
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
				resource: ['smapsTasks'],
			},
		},
		description: 'Version of the smap',
	},

	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smapsTasks'],
			},
		},
		description: 'ID of the task',
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
				resource: ['smapsTasks'],
				operation: ['changeStateOfTaskAndAssignTaskToUser'],
			},
		},
		description: 'JSON body sent to the API',
	},
];