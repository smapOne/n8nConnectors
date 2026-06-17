import { executePreviewSmapsTasks } from '../../../../nodes/Smapone/resources/preview/smapsTasks/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const majorVersion = '1/0';
const version = '1.0/1';
const taskId = 'task/id';
const fileId = 'file/id';
const encodedSmapId = encodeURIComponent(smapId);
const encodedMajorVersion = encodeURIComponent(majorVersion);
const encodedVersion = encodeURIComponent(version);
const encodedTaskId = encodeURIComponent(taskId);
const encodedFileId = encodeURIComponent(fileId);

const allTasksEndpoint = `/preview/Smaps/${encodedSmapId}/Tasks`;
const majorVersionTasksEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Tasks`;
const singleTaskEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}`;
const taskFileEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}/Files/${encodedFileId}`;
const timestampPattern = String.raw`\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}`;

createExecuteTestSuite('previewSmapsTasks', executePreviewSmapsTasks, [
	{
		operation: 'loadAllTasksForAllVersions',
		method: 'GET',
		endpoint: allTasksEndpoint,
		parameters: { outputFormat: 'Json' },
		qs: { format: 'Json' },
		testName: 'loadAllTasksForAllVersions calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadAllTasksForAllVersions',
		method: 'GET',
		endpoint: allTasksEndpoint,
		parameters: { outputFormat: 'Xml' },
		qs: { format: 'Xml' },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadAllTasksForAllVersions calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadAllTasksForAllVersions',
		method: 'GET',
		endpoint: allTasksEndpoint,
		parameters: { outputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smap_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadAllTasksForAllVersions calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadAllTasksForGivenMajorVersion',
		method: 'GET',
		endpoint: majorVersionTasksEndpoint,
		parameters: { majorVersion, outputFormat: 'Json' },
		qs: { format: 'Json' },
		testName: 'loadAllTasksForGivenMajorVersion calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadAllTasksForGivenMajorVersion',
		method: 'GET',
		endpoint: majorVersionTasksEndpoint,
		parameters: { majorVersion, outputFormat: 'Xml' },
		qs: { format: 'Xml' },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadAllTasksForGivenMajorVersion calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadAllTasksForGivenMajorVersion',
		method: 'GET',
		endpoint: majorVersionTasksEndpoint,
		parameters: { majorVersion, outputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smap_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadAllTasksForGivenMajorVersion calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Json', useDefault: false },
		qs: { format: 'Json', useDefault: false },
		testName: 'loadSingleTask calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Xml', useDefault: false },
		qs: { format: 'Xml', useDefault: false },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadSingleTask calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Html', useDefault: false },
		qs: { format: 'Html', useDefault: false },
		requestOptions: { responseFormat: 'text', accept: 'text/html' },
		testName: 'loadSingleTask calls smaponeApiRequest with HTML format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Txt', useDefault: false },
		qs: { format: 'Txt', useDefault: false },
		requestOptions: { responseFormat: 'text', accept: 'text/plain' },
		testName: 'loadSingleTask calls smaponeApiRequest with TXT format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Pdf', useDefault: true },
		qs: { format: 'Pdf', useDefault: true },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^task_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadSingleTask calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Doc', useDefault: false },
		qs: { format: 'Doc', useDefault: false },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^task_id_${timestampPattern}\\.doc$`),
		mimeType: 'application/msword',
		testName: 'loadSingleTask calls smaponeApiDownloadRequest with DOC format',
	},
	{
		operation: 'loadSingleTask',
		method: 'GET',
		endpoint: singleTaskEndpoint,
		parameters: { version, taskId, taskOutputFormat: 'Docx', useDefault: false },
		qs: { format: 'Docx', useDefault: false },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^task_id_${timestampPattern}\\.docx$`),
		mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		testName: 'loadSingleTask calls smaponeApiDownloadRequest with DOCX format',
	},
	{
		operation: 'deleteSingleTask',
		method: 'DELETE',
		endpoint: singleTaskEndpoint,
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
		endpoint: taskFileEndpoint,
		parameters: { version, taskId, fileId },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^file_id_${timestampPattern}\\.png$`),
		mimeType: 'image/png',
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
