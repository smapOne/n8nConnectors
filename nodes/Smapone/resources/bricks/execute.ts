import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../GenericFunctions';

export async function executeBricks(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {

	let responseData: IDataObject | IDataObject[];

	switch (operation) {

		case 'getBricks':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Bricks',
			);
			break;

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "bricks".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}