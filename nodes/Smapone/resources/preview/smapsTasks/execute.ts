import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import {
	smaponeApiRequest,
	buildSmaponeFileName,
	smaponeApiDownloadRequest,
	isBinaryExecutionData,
} from '../../../GenericFunctions';
import { smaponeApiPreviewFormatRequest } from '../previewFormatRequest';

export async function executePreviewSmapsTasks(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	const smapId = this.getNodeParameter('smapId', i) as string;

	switch (operation) {
		case 'loadAllTasksForAllVersions': {
			const outputFormat = this.getNodeParameter('outputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(smapId)}/Tasks`;
			const result = await smaponeApiPreviewFormatRequest.call(
				this,
				'GET',
				endpoint,
				outputFormat,
				smapId,
			);

			if (isBinaryExecutionData(result)) {
				return result;
			}

			responseData = result;

			break;
		}

		case 'loadAllTasksForGivenMajorVersion': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const outputFormat = this.getNodeParameter('outputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(majorVersion)}/Tasks`;
			const result = await smaponeApiPreviewFormatRequest.call(
				this,
				'GET',
				endpoint,
				outputFormat,
				smapId,
			);

			if (isBinaryExecutionData(result)) {
				return result;
			}

			responseData = result;

			break;
		}

		case 'loadSingleTask': {
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;
			const taskOutputFormat = this.getNodeParameter('taskOutputFormat', i) as string;
			const useDefault = this.getNodeParameter('useDefault', i) as boolean;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(taskId)}`;
			const result = await smaponeApiPreviewFormatRequest.call(
				this,
				'GET',
				endpoint,
				taskOutputFormat,
				taskId,
				{ useDefault },
			);

			if (isBinaryExecutionData(result)) {
				return result;
			}

			responseData = result;

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
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(version)}/Tasks/${encodeURIComponent(
				taskId,
			)}/Files/${encodeURIComponent(fileId)}`;

			return await smaponeApiDownloadRequest.call(
				this,
				endpoint,
				buildSmaponeFileName(fileId, 'png'),
				'image/png',
			);
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
