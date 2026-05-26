import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executePreviewSmapsTasks(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	const smapId = this.getNodeParameter('smapId', i) as string;

	switch (operation) {
		case 'loadAllTasksForAllVersions':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(smapId)}/Tasks`,
			);
			break;

		case 'loadAllTasksForAllVersionsAsFormat': {
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(smapId)}/Tasks.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadAllTasksForGivenMajorVersion': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(majorVersion)}/Tasks`,
			);
			break;
		}

		case 'loadAllTasksForGivenMajorVersionAsFormat': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(majorVersion)}/Tasks.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadSingleTask': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(taskId)}`,
			);
			break;
		}

		case 'loadSingleTaskAsFormat': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(
					taskId,
				)}.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'deleteSingleTask': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(taskId)}`,
			);
			break;
		}

		case 'getAllFilesMetaDataForSpecificTask': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(taskId)}/Files`,
			);
			break;
		}

		case 'loadFileForSpecificTask': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;
			const fileId = this.getNodeParameter('fileId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(
					taskId,
				)}/Files/${encodeURIComponent(fileId)}`,
			);
			break;
		}

		case 'createTaskForGivenVersion': {
			const version = this.getNodeParameter('version', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks`,
				body,
			);
			break;
		}

		case 'changeStateOfTaskAndAssignTaskToUser': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(taskId)}/State`,
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "previewSmapsTasks".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}