import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import {
	smaponeApiRequest,
	buildSmaponeExportFileName,
	buildSmaponeFileName,
	smaponeApiDownloadRequest,
	isBinaryExecutionData,
} from '../../../GenericFunctions';
import { smaponeApiPreviewFormatRequest } from '../previewFormatRequest';

export async function executePreviewSmapsRecords(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	const smapId = this.getNodeParameter('smapId', i) as string;

	switch (operation) {
		case 'loadAllDataRecordsForSmap': {
			const outputFormat = this.getNodeParameter('outputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(smapId)}/Records`;
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

		case 'loadAllDataRecordsForMajorVersion': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const outputFormat = this.getNodeParameter('outputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(majorVersion)}/Records`;
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

		case 'exportDataRecordsAsExcel': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const smapName = this.getNodeParameter('smapName', i) as string;
			const fileName = buildSmaponeExportFileName(smapName);

			return await smaponeApiDownloadRequest.call(
				this,
				`/preview/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(majorVersion)}/Records/Export/xlsx`,
				fileName,
				'application/zip',
			);
		}

		case 'exportDataRecordsAsPdf': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const smapName = this.getNodeParameter('smapName', i) as string;
			const fileName = buildSmaponeExportFileName(smapName);

			return await smaponeApiDownloadRequest.call(
				this,
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(majorVersion)}/Records/Export/pdf`,
				fileName,
				'application/zip',
			);
		}

		case 'exportDataRecordsAsPdfForSpecificSlot': {
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;
			const slotPosition = this.getNodeParameter('slotPosition', i) as number;
			const smapName = this.getNodeParameter('smapName', i) as string;
			const fileName = buildSmaponeExportFileName(smapName);

			return await smaponeApiDownloadRequest.call(
				this,
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Reports/Slots/${encodeURIComponent(slotPosition,)}/Records/Export/pdf`,
				fileName,
				'application/zip',
			);
		}

		case 'loadSingleDataRecord': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const recordOutputFormat = this.getNodeParameter('recordOutputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(
				version,
			)}/Records/${encodeURIComponent(recordId)}`;
			const result = await smaponeApiPreviewFormatRequest.call(
				this,
				'GET',
				endpoint,
				recordOutputFormat,
				recordId,
			);

			if (isBinaryExecutionData(result)) {
				return result;
			}

			responseData = result;

			break;
		}

		case 'deleteSingleDataRecord': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Records/${encodeURIComponent(recordId)}`,
			);

			break;
		}

		case 'loadReportForSpecificDataRecord': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const reportTemplateId = this.getNodeParameter('reportTemplateId', i) as string;
			const reportOutputFormat = this.getNodeParameter('reportOutputFormat', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(
				version,
			)}/Records/${encodeURIComponent(
				recordId,
			)}/Reports/${encodeURIComponent(reportTemplateId)}`;

			return await smaponeApiPreviewFormatRequest.call(
				this,
				'GET',
				endpoint,
				reportOutputFormat,
				reportTemplateId,
			) as INodeExecutionData[];
		}

		case 'getAllFilesMetaData': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Records/${encodeURIComponent(recordId)}/Files`,
			);

			break;
		}

		case 'loadFileForSpecificDataRecord': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;
			const fileId = this.getNodeParameter('fileId', i) as string;
			const endpoint = `/preview/Smaps/${encodeURIComponent(
				smapId,
			)}/Versions/${encodeURIComponent(
				version,
			)}/Records/${encodeURIComponent(
				recordId,
			)}/Files/${encodeURIComponent(fileId)}`;

			return await smaponeApiDownloadRequest.call(
				this,
				endpoint,
				buildSmaponeFileName(fileId, 'png'),
				'image/png',
			);
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "previewSmapsRecords".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}
