import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executePreviewSmaps(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getODataDefinitionForSmapVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(smapId)}/Odata`,
			);
			break;
		}

		case 'provideODataEdmSchemaDefinition': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/preview/Smaps/${encodeURIComponent(smapId)}/Odata/$metadata`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "previewSmaps".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}