import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeTemplates(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllAvailableCompanySmapTemplates':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Templates/CompanySmaps',
			);
			break;

		case 'getAllAvailableAppIconTemplates':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Templates/Logos',
			);
			break;

		case 'getAllAvailableSmapTemplates':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Templates/Smaps',
			);
			break;

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "templates".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}