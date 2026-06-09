import { executePreviewSmapsRecords } from '../../../../nodes/Smapone/resources/preview/smapsRecords/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const majorVersion = '1/0';
const version = '1.0/1';
const recordId = 'record/id';
const reportTemplateId = 'template/id';
const fileId = 'file/id';
const encodedSmapId = encodeURIComponent(smapId);
const encodedMajorVersion = encodeURIComponent(majorVersion);
const encodedVersion = encodeURIComponent(version);
const encodedRecordId = encodeURIComponent(recordId);
const encodedReportTemplateId = encodeURIComponent(reportTemplateId);
const encodedFileId = encodeURIComponent(fileId);

createExecuteTestSuite('previewSmapsRecords', executePreviewSmapsRecords, [
	{
		operation: 'loadAllDataRecordsForSmap',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Records`,
	},
	{
		operation: 'loadAllDataRecordsForCurrentVersion',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/Current/Records`,
	},
	{
		operation: 'loadAllDataRecordsForMajorVersion',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Records`,
		parameters: { majorVersion },
	},
	{
		operation: 'exportDataRecordsAsExcel',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Records/Export/xlsx`,
		parameters: { majorVersion },
	},
	{
		operation: 'exportDataRecordsAsPdf',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Records/Export/pdf`,
		parameters: { majorVersion },
	},
	{
		operation: 'exportDataRecordsAsPdfForSpecificSlot',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Reports/Slots/2/Records/Export/pdf`,
		parameters: { majorVersion, slotPosition: 2 },
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}`,
		parameters: { version, recordId },
	},
	{
		operation: 'deleteSingleDataRecord',
		method: 'DELETE',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}`,
		parameters: { version, recordId },
	},
	{
		operation: 'loadReportForSpecificDataRecord',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}/Reports/${encodedReportTemplateId}`,
		parameters: { version, recordId, reportTemplateId },
	},
	{
		operation: 'getAllFilesMetaData',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}/Files`,
		parameters: { version, recordId },
	},
	{
		operation: 'loadFileForSpecificDataRecord',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}/Files/${encodedFileId}`,
		parameters: { version, recordId, fileId },
	},
], {
	defaultParameters: { smapId },
});
