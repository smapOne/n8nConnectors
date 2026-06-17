import { executeSmapsData } from '../../../../nodes/Smapone/resources/intern/smapsData/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const version = '1.0/1';
const majorVersion = '1/0';
const recordId = 'record/id';
const fileId = 'file/id';
const format = 'json/xml';
const encodedSmapId = encodeURIComponent(smapId);
const encodedVersion = encodeURIComponent(version);
const encodedMajorVersion = encodeURIComponent(majorVersion);
const encodedRecordId = encodeURIComponent(recordId);
const encodedFileId = encodeURIComponent(fileId);
const encodedFormat = encodeURIComponent(format);
const timestampPattern = String.raw`\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}`;
const dataRecordFileEndpoint = `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/${encodedRecordId}/Files/${encodedFileId}`;

createExecuteTestSuite('smapsData', executeSmapsData, [
	{
		operation: 'loadAllDataRecordsForAllVersions',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Data`,
		parameters: {
			smapId,
			markAsExported: true,
			format: 'json',
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, format: 'json', state: 'open' },
	},
	{
		operation: 'loadAllDataRecordsForAllVersionsAsFormat',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Data.${encodedFormat}`,
		parameters: {
			smapId,
			markAsExported: false,
			format,
			state: 'closed',
		},
		emptyBody: true,
		qs: { markAsExported: false, state: 'closed' },
	},
	{
		operation: 'loadAllDataRecordsForCurrentPublishedVersion',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/Current/Data`,
		parameters: {
			smapId,
			markAsExported: true,
			format: 'csv',
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, format: 'csv', state: 'open' },
	},
	{
		operation: 'loadAllDataRecordsForCurrentPublishedVersionAsFormat',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/Current/Data.${encodedFormat}`,
		parameters: {
			smapId,
			markAsExported: true,
			format,
			state: 'open',
		},
	},
	{
		operation: 'loadAllDataRecordsForGivenVersion',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data`,
		parameters: {
			smapId,
			version,
			markAsExported: true,
			format: 'json',
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, format: 'json', state: 'open' },
	},
	{
		operation: 'createTaskForGivenVersion',
		method: 'POST',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data`,
		parameters: {
			smapId,
			version,
			body: { title: 'New record' },
		},
		body: { title: 'New record' },
	},
	{
		operation: 'deleteRecordsOfVersion',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data`,
		parameters: { smapId, version, state: 'open' },
		emptyBody: true,
		qs: { state: 'open' },
	},
	{
		operation: 'loadAllDataRecordsForGivenVersionAsFormat',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data.${encodedFormat}`,
		parameters: {
			smapId,
			version,
			markAsExported: true,
			format,
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, state: 'open' },
	},
	{
		operation: 'loadAllDataRecordsForGivenMajorVersion',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Data`,
		parameters: {
			smapId,
			majorVersion,
			markAsExported: true,
			format: 'json',
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, format: 'json', state: 'open' },
	},
	{
		operation: 'loadAllDataRecordsForGivenMajorVersionAsFormat',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Data.${encodedFormat}`,
		parameters: {
			smapId,
			majorVersion,
			markAsExported: true,
			format,
			state: 'open',
		},
		emptyBody: true,
		qs: { markAsExported: true, state: 'open' },
	},
	{
		operation: 'loadSingleDataRecordAsFormat',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/${encodedRecordId}.${encodedFormat}`,
		parameters: {
			smapId,
			version,
			recordId,
			format,
			markAsExported: true,
			useDefault: true,
		},
		emptyBody: true,
		qs: { markAsExported: true, useDefault: true },
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/${encodedRecordId}`,
		parameters: {
			smapId,
			version,
			recordId,
			format: 'json',
			markAsExported: true,
			useDefault: true,
		},
		emptyBody: true,
		qs: { markAsExported: true, format: 'json', useDefault: true },
	},
	{
		operation: 'deleteSingleDataRecord',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/${encodedRecordId}`,
		parameters: { smapId, version, recordId },
	},
	{
		operation: 'getAllFilesMetaDataForSpecificDataRecord',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/${encodedRecordId}/Files`,
		parameters: { smapId, version, recordId },
	},
	{
		operation: 'loadFileForSpecificDataRecord',
		method: 'GET',
		endpoint: dataRecordFileEndpoint,
		parameters: { smapId, version, recordId, fileId },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^file_id_${timestampPattern}\\.png$`),
		mimeType: 'image/png',
	},
	{
		operation: 'fillTemplateWithDummyData',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/Preview.${encodedFormat}`,
		parameters: {
			smapId,
			version,
			format,
			generateRandomValues: true,
			useDefault: false,
			fileNamePattern: 'report-{id}',
			inline: true,
		},
		emptyBody: true,
		qs: {
			generateRandomValues: true,
			useDefault: false,
			inline: true,
			fileNamePattern: 'report-{id}',
		},
	},
	{
		operation: 'generateDummyRecord',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Data/Preview`,
		parameters: {
			smapId,
			version,
			generateRandomValues: false,
		},
		emptyBody: true,
		qs: { generateRandomValues: false },
	},
]);
