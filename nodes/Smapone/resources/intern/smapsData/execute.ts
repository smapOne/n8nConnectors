import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsData(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'loadAllDataRecordsForAllVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Data`,
			);
			break;
		}

		case 'loadAllDataRecordsForAllVersionsAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Data.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadAllDataRecordsForCurrentPublishedVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/Current/Data`,
			);
			break;
		}

		case 'loadAllDataRecordsForCurrentPublishedVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const format = this.getNodeParameter('format', i) as string;

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

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data`,
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

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data`,
			);
			break;
		}

		case 'loadAllDataRecordsForGivenVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadAllDataRecordsForGivenMajorVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Data`,
			);
			break;
		}

		case 'loadAllDataRecordsForGivenMajorVersionAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Data.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadSingleDataRecordAsFormat': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'loadSingleDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}`,
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

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/${encodeURIComponent(recordId)}/Files/${encodeURIComponent(fileId)}`,
			);
			break;
		}

		case 'fillTemplateWithDummyData': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const format = this.getNodeParameter('format', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/Preview.${encodeURIComponent(format)}`,
			);
			break;
		}

		case 'generateDummyRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(
					version,
				)}/Data/Preview`,
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