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

const majorVersionRecordsEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Records`;
const singleRecordEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}`;
const reportEndpoint = `/preview/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Records/${encodedRecordId}/Reports/${encodedReportTemplateId}`;
const timestampPattern = String.raw`\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}`;

createExecuteTestSuite('previewSmapsRecords', executePreviewSmapsRecords, [
	{
		operation: 'loadAllDataRecordsForSmap',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Records`,
		parameters: { outputFormat: 'Json' },
		qs: { format: 'Json' },
		testName: 'loadAllDataRecordsForSmap calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadAllDataRecordsForSmap',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Records`,
		parameters: { outputFormat: 'Xml' },
		qs: { format: 'Xml' },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadAllDataRecordsForSmap calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadAllDataRecordsForSmap',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Records`,
		parameters: { outputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smap_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadAllDataRecordsForSmap calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadAllDataRecordsForMajorVersion',
		method: 'GET',
		endpoint: majorVersionRecordsEndpoint,
		parameters: { majorVersion, outputFormat: 'Json' },
		qs: { format: 'Json' },
		testName: 'loadAllDataRecordsForMajorVersion calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadAllDataRecordsForMajorVersion',
		method: 'GET',
		endpoint: majorVersionRecordsEndpoint,
		parameters: { majorVersion, outputFormat: 'Xml' },
		qs: { format: 'Xml' },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadAllDataRecordsForMajorVersion calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadAllDataRecordsForMajorVersion',
		method: 'GET',
		endpoint: majorVersionRecordsEndpoint,
		parameters: { majorVersion, outputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smap_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadAllDataRecordsForMajorVersion calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'exportDataRecordsAsExcel',
		method: 'GET',
		endpoint: `${majorVersionRecordsEndpoint}/Export/xlsx`,
		parameters: { majorVersion, smapName: 'smapone-export' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smapone-export_${timestampPattern}\\.zip$`),
		mimeType: 'application/zip',
	},
	{
		operation: 'exportDataRecordsAsPdf',
		method: 'GET',
		endpoint: `${majorVersionRecordsEndpoint}/Export/pdf`,
		parameters: { majorVersion, smapName: 'smapone-export' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smapone-export_${timestampPattern}\\.zip$`),
		mimeType: 'application/zip',
	},
	{
		operation: 'exportDataRecordsAsPdfForSpecificSlot',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Versions/${encodedMajorVersion}/Reports/Slots/2/Records/Export/pdf`,
		parameters: { majorVersion, slotPosition: 2, smapName: 'smapone-export' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^smapone-export_${timestampPattern}\\.zip$`),
		mimeType: 'application/zip',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Json' },
		qs: { format: 'Json' },
		testName: 'loadSingleDataRecord calls smaponeApiRequest with JSON format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Xml' },
		qs: { format: 'Xml' },
		requestOptions: { responseFormat: 'text', accept: 'application/xml' },
		testName: 'loadSingleDataRecord calls smaponeApiRequest with XML format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Html' },
		qs: { format: 'Html' },
		requestOptions: { responseFormat: 'text', accept: 'text/html' },
		testName: 'loadSingleDataRecord calls smaponeApiRequest with HTML format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Txt' },
		qs: { format: 'Txt' },
		requestOptions: { responseFormat: 'text', accept: 'text/plain' },
		testName: 'loadSingleDataRecord calls smaponeApiRequest with TXT format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^record_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadSingleDataRecord calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Doc' },
		qs: { format: 'Doc' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^record_id_${timestampPattern}\\.doc$`),
		mimeType: 'application/msword',
		testName: 'loadSingleDataRecord calls smaponeApiDownloadRequest with DOC format',
	},
	{
		operation: 'loadSingleDataRecord',
		method: 'GET',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId, recordOutputFormat: 'Docx' },
		qs: { format: 'Docx' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^record_id_${timestampPattern}\\.docx$`),
		mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		testName: 'loadSingleDataRecord calls smaponeApiDownloadRequest with DOCX format',
	},
	{
		operation: 'deleteSingleDataRecord',
		method: 'DELETE',
		endpoint: singleRecordEndpoint,
		parameters: { version, recordId },
	},
	{
		operation: 'loadReportForSpecificDataRecord',
		method: 'GET',
		endpoint: reportEndpoint,
		parameters: { version, recordId, reportTemplateId, reportOutputFormat: 'Pdf' },
		qs: { format: 'Pdf' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^template_id_${timestampPattern}\\.pdf$`),
		mimeType: 'application/pdf',
		testName: 'loadReportForSpecificDataRecord calls smaponeApiDownloadRequest with PDF format',
	},
	{
		operation: 'loadReportForSpecificDataRecord',
		method: 'GET',
		endpoint: reportEndpoint,
		parameters: { version, recordId, reportTemplateId, reportOutputFormat: 'Doc' },
		qs: { format: 'Doc' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^template_id_${timestampPattern}\\.doc$`),
		mimeType: 'application/msword',
		testName: 'loadReportForSpecificDataRecord calls smaponeApiDownloadRequest with DOC format',
	},
	{
		operation: 'loadReportForSpecificDataRecord',
		method: 'GET',
		endpoint: reportEndpoint,
		parameters: { version, recordId, reportTemplateId, reportOutputFormat: 'Docx' },
		qs: { format: 'Docx' },
		downloadRequest: true,
		fileNamePattern: new RegExp(`^template_id_${timestampPattern}\\.docx$`),
		mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		testName: 'loadReportForSpecificDataRecord calls smaponeApiDownloadRequest with DOCX format',
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
		downloadRequest: true,
		fileNamePattern: new RegExp(`^file_id_${timestampPattern}\\.png$`),
		mimeType: 'image/png',
	},
], {
	defaultParameters: { smapId },
});
