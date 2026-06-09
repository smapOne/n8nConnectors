import { executePreviewSmapsTasks } from '../../../../nodes/Smapone/resources/preview/smapsTasks/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const majorVersion = '1/0';
const version = '1.0/1';
const taskId = 'task/id';
const fileId = 'file/id';
const format = 'json/xml';
const encodedSmapId = encodeURIComponent(smapId);
const encodedMajorVersion = encodeURIComponent(majorVersion);
const encodedVersion = encodeURIComponent(version);
const encodedTaskId = encodeURIComponent(taskId);
const encodedFileId = encodeURIComponent(fileId);
const encodedFormat = encodeURIComponent(format);

createExecuteTestSuite('previewSmapsTasks', executePreviewSmapsTasks, [
	{
		operation: 'loadAllTasksForAllVersions',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Tasks`,
	},
	{
		operation: 'loadAllTasksForAllVersionsAsFormat',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Tasks.${encodedFormat}`,
		parameters: { format },
	},
	{
		operation: 'loadAllTasksForGivenMajorVersion',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Tasks`,
		parameters: { majorVersion },
	},
	{
		operation: 'loadAllTasksForGivenMajorVersionAsFormat',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Tasks.${encodedFormat}`,
		parameters: { majorVersion, format },
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}`,
		parameters: { version, taskId },
	},
	{
		operation: 'loadSingleTaskAsFormat',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}.${encodedFormat}`,
		parameters: { version, taskId, format },
	},
	{
		operation: 'deleteSingleTask',
		method: 'DELETE',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}`,
		parameters: { version, taskId },
	},
	{
		operation: 'getAllFilesMetaDataForSpecificTask',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}/Files`,
		parameters: { version, taskId },
	},
	{
		operation: 'loadFileForSpecificTask',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}/Files/${encodedFileId}`,
		parameters: { version, taskId, fileId },
	},
	{
		operation: 'createTaskForGivenVersion',
		method: 'POST',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks`,
		parameters: { version, body: { title: 'New task' } },
		body: { title: 'New task' },
	},
	{
		operation: 'changeStateOfTaskAndAssignTaskToUser',
		method: 'PUT',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}/State`,
		parameters: {
			version,
			taskId,
			body: { state: 'open', userId: 'user-1' },
		},
		body: { state: 'open', userId: 'user-1' },
	},
], {
	defaultParameters: { smapId },
});
