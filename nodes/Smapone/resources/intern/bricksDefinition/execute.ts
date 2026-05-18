import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeBricksDefinition(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {

	let responseData: IDataObject | IDataObject[];

	switch (operation) {

		case 'getBricksDefinition':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Bricks/Definition',
			);
			break;

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "bricksDefinition".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}