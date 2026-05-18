import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeAccount(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {

	let responseData: IDataObject | IDataObject[];

	switch (operation) {

		case 'get':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Account',
			);
			break;

		case 'getHasSubscriptionAccessGrants':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Account/GetHasSubscriptionAccessGrants',
			);
			break;

		case 'getSettings':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Account/Settings',
			);
			break;

		case 'getSetting': {
			const key = this.getNodeParameter('key', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Account/Settings/${encodeURIComponent(key)}`,
			);
			break;
		}

		case 'getStats':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Account/Stats',
			);
			break;

		case 'updateSetting': {
			const key = this.getNodeParameter('key', i) as string;
			const value = this.getNodeParameter('value', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Account/Settings/${encodeURIComponent(key)}`,
				{ value },
			);
			break;
		}

		case 'deleteSetting': {
			const key = this.getNodeParameter('key', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Account/Settings/${encodeURIComponent(key)}`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "account".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}