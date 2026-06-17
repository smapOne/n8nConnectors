import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { buildSmaponeFileName, smaponeApiDownloadRequest, smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsData(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'loadAllDataRecordsForAllVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (format) {
				qs.format = format;
			}

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Data`,
				{},
				qs,
			);
			break;
		}

		case 'loadAllDataRecordsForAllVersionsAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Data.${encodeURIComponent(format)}`,
				{},
				qs
			);
			break;
		}

		case 'loadAllDataRecordsForCurrentPublishedVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (format) {
				qs.format = format;
			}

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/Current/Data`,
				{},
				qs
			);
			break;
		}

		case 'loadAllDataRecordsForCurrentPublishedVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/Current/Data.${encodeURIComponent(
					format,
				)}`,
			);
			break;
		}

		case 'loadAllDataRecordsForGivenVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (format) {
				qs.format = format;
			}

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data`,
				{},
				qs
			);
			break;
		}

		case 'createTaskForGivenVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data`,
				body,
			);
			break;
		}

		case 'deleteRecordsOfVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {};

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data`,
				{},
				qs
			);
			break;
		}

		case 'loadAllDataRecordsForGivenVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data.${encodeURIComponent(format)}`,
				{},
				qs
			);
			break;
		}

		case 'loadAllDataRecordsForGivenMajorVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (format) {
				qs.format = format;
			}

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Data`,
				{},
				qs
			);
			break;
		}

		case 'loadAllDataRecordsForGivenMajorVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const format = this.getNodeParameter('format', i) as string;
			const state = this.getNodeParameter('state', i) as string;

			const qs: IDataObject = {
				markAsExported,
			};

			if (state) {
				qs.state = state;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Data.${encodeURIComponent(format)}`,
				{},
				qs
			);
			break;
		}

		case 'loadSingleDataRecordAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const format = this.getNodeParameter('format', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const useDefault = this.getNodeParameter('useDefault', i) as boolean;

			const qs: IDataObject = {
				markAsExported,
			};

			if (useDefault) {
				qs.useDefault = useDefault;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}.${encodeURIComponent(format)}`,
				{},
				qs
			);
			break;
		}

		case 'loadSingleDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const format = this.getNodeParameter('format', i) as string;
			const markAsExported = this.getNodeParameter('markAsExported', i) as boolean;
			const useDefault = this.getNodeParameter('useDefault', i) as boolean;

			const qs: IDataObject = {
				markAsExported,
			};

			if (format) {
				qs.format = format;
			}

			if (useDefault) {
				qs.useDefault = useDefault;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}`,
				{},
				qs
			);
			break;
		}

		case 'deleteSingleDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}`,
			);
			break;
		}

		case 'getAllFilesMetaDataForSpecificDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}/Files`,
			);
			break;
		}

		case 'loadFileForSpecificDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const fileId = this.getNodeParameter('fileId', i) as string;
			const endpoint = `/intern/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(version)}/Data/${encodeURIComponent(
				recordId,
			)}/Files/${encodeURIComponent(fileId)}`;

			return await smaponeApiDownloadRequest.call(
				this,
				endpoint,
				buildSmaponeFileName(fileId, 'png'),
				'image/png',
			);
		}

		case 'fillTemplateWithDummyData': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const format = this.getNodeParameter('format', i) as string;
			const generateRandomValues = this.getNodeParameter('generateRandomValues', i) as boolean;
			const useDefault = this.getNodeParameter('useDefault', i) as boolean;
			const fileNamePattern = this.getNodeParameter('fileNamePattern', i) as string;
			const inline = this.getNodeParameter('inline', i) as boolean;

			const qs: IDataObject = {
				generateRandomValues,
				useDefault,
				inline
			};

			if (fileNamePattern) {
				qs.fileNamePattern = fileNamePattern;
			}
			
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/Preview.${encodeURIComponent(format)}`,
				{},
				qs
			);
			break;
		}

		case 'generateDummyRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const generateRandomValues = this.getNodeParameter('generateRandomValues', i) as boolean;

			const qs: IDataObject = {
				generateRandomValues,
			};

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/Preview`,
				{},
				qs
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsData".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}