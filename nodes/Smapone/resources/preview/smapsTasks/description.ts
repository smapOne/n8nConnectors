import type { INodeProperties } from 'n8n-workflow';

export const previewSmapsTasksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
			},
		},
		options: [
			{
				name: '[Preview] Change State of Task and Assign Task to User',
				value: 'changeStateOfTaskAndAssignTaskToUser',
				action: '[Preview] Change the state of a task and assign a task to a user',
			},
			{
				name: '[Preview] Create Task for Given Version',
				value: 'createTaskForGivenVersion',
				action: '[Preview] Create a task for a given version',
			},
			{
				name: '[Preview] Delete Single Task',
				value: 'deleteSingleTask',
				action: '[Preview] Delete a single task',
			},
			{
				name: '[Preview] Get All Files Meta Data for Specific Task',
				value: 'getAllFilesMetaDataForSpecificTask',
				action: '[Preview] Get all files meta data for a specific task',
			},
			{
				name: '[Preview] Load All Tasks for All Versions',
				value: 'loadAllTasksForAllVersions',
				action: '[Preview] Load all tasks for all versions of the smap',
			},
			{
				name: '[Preview] Load All Tasks for All Versions as Format',
				value: 'loadAllTasksForAllVersionsAsFormat',
				action: '[Preview] Load all tasks for all versions of the smap as format',
			},
			{
				name: '[Preview] Load All Tasks for Given Major Version',
				value: 'loadAllTasksForGivenMajorVersion',
				action: '[Preview] Load all tasks of all minor versions for a given major version',
			},
			{
				name: '[Preview] Load All Tasks for Given Major Version as Format',
				value: 'loadAllTasksForGivenMajorVersionAsFormat',
				action: '[Preview] Load all tasks of all minor versions for a given major version as format',
			},
			{
				name: '[Preview] Load File for Specific Task',
				value: 'loadFileForSpecificTask',
				action: '[Preview] Load a file for a specific task',
			},
			{
				name: '[Preview] Load Single Task',
				value: 'loadSingleTask',
				action: '[Preview] Load a single task',
			},
			{
				name: '[Preview] Load Single Task as Format',
				value: 'loadSingleTaskAsFormat',
				action: '[Preview] Load a single task as format',
			},
		],
		default: 'loadAllTasksForAllVersions',
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
				resource: ['previewSmapsTasks'],
			},
		},
		description: 'ID of the smap',
	},

	{
		displayName: 'Major Version',
		name: 'majorVersion',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: [
					'loadAllTasksForGivenMajorVersion',
					'loadAllTasksForGivenMajorVersionAsFormat',
				],
			},
		},
		description: 'Major version of the smap',
	},

	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: [
					'changeStateOfTaskAndAssignTaskToUser',
					'createTaskForGivenVersion',
					'deleteSingleTask',
					'getAllFilesMetaDataForSpecificTask',
					'loadFileForSpecificTask',
					'loadSingleTask',
					'loadSingleTaskAsFormat',
				],
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
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: [
					'changeStateOfTaskAndAssignTaskToUser',
					'deleteSingleTask',
					'getAllFilesMetaDataForSpecificTask',
					'loadFileForSpecificTask',
					'loadSingleTask',
					'loadSingleTaskAsFormat',
				],
			},
		},
		description: 'ID of the task',
	},

	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: ['loadFileForSpecificTask'],
			},
		},
		description: 'ID of the file',
	},

	{
		displayName: 'Format',
		name: 'format',
		type: 'string',
		required: true,
		default: 'json',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: [
					'loadAllTasksForAllVersionsAsFormat',
					'loadAllTasksForGivenMajorVersionAsFormat',
					'loadSingleTaskAsFormat',
				],
			},
		},
		description: 'Response format',
	},

	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				apiScope: ['preview'],
				resource: ['previewSmapsTasks'],
				operation: [
					'changeStateOfTaskAndAssignTaskToUser',
					'createTaskForGivenVersion',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];