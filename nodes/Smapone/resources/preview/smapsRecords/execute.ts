import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executePreviewSmapsRecords(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	const smapId = this.getNodeParameter('smapId', i) as string;

	switch (operation) {
		case 'loadAllDataRecordsForSmap':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(smapId)}/Records`,
			);
			break;

		case 'loadAllDataRecordsForCurrentVersion':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/Current/Records`,
			);
			break;

		case 'loadAllDataRecordsForMajorVersion': {
			const majorVersion = this.getNodeParameter(
				'majorVersion',
				i,
			) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(majorVersion)}/Records`,
			);

			break;
		}

		case 'exportDataRecordsAsExcel': {
			const majorVersion = this.getNodeParameter(
				'majorVersion',
				i,
			) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Records/Export/xlsx`,
			);

			break;
		}

		case 'exportDataRecordsAsPdf': {
			const majorVersion = this.getNodeParameter(
				'majorVersion',
				i,
			) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Records/Export/pdf`,
			);

			break;
		}

		case 'exportDataRecordsAsPdfForSpecificSlot': {
			const majorVersion = this.getNodeParameter(
				'majorVersion',
				i,
			) as string;

			const slotPosition = this.getNodeParameter(
				'slotPosition',
				i,
			) as number;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Reports/Slots/${encodeURIComponent(slotPosition,)}/Records/Export/pdf`,
			);

			break;
		}

		case 'loadSingleDataRecord': {
			const version = this.getNodeParameter('version', i) as string;
			const recordId = this.getNodeParameter('recordId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Records/${encodeURIComponent(recordId)}`,
			);

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

			const reportTemplateId = this.getNodeParameter(
				'reportTemplateId',
				i,
			) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Records/${encodeURIComponent(
					recordId,
				)}/Reports/${encodeURIComponent(reportTemplateId)}`,
			);

			break;
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

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Records/${encodeURIComponent(
					recordId,
				)}/Files/${encodeURIComponent(fileId)}`,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "previewSmapsRecords".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}