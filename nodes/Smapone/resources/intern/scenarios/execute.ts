import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeScenarios(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'loadListOfCompanyScenarios':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Scenarios/company',
			);
			break;

		case 'loadListOfCustomScenarios':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Scenarios/custom',
			);
			break;

		case 'loadListOfPredefinedScenariosByLanguage': {
			const language = this.getNodeParameter('language', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Scenarios/predefined/${encodeURIComponent(language)}`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "scenarios".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}