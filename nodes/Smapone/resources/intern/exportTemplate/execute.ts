import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeExportTemplate(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'deleteMasterExportTemplateOfSubscription':
			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				'/intern/ExportTemplate/Master',
			);
			break;

		case 'getMasterExportTemplateOfSubscription':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/ExportTemplate/Master',
			);
			break;

		case 'uploadMasterExportTemplateForSubscription': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/ExportTemplate/Master',
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "exportTemplate".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}