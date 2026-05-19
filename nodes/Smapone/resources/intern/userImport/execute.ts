import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeUserImport(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllUsersByManagerSubscription':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/UserImport',
			);
			break;

		case 'createOrUpdateUsers': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/UserImport',
				body,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "userImport".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}