import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsNotification(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getConfiguredWebhookInformation': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Notification/Data/Webhook`,
			);
			break;
		}

		case 'overwriteWebhookConfiguration': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Notification/Data/Webhook`,
				body,
			);
			break;
		}

		case 'removeWebhookConfiguration': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Notification/Data/Webhook`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsNotification".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}