import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmaps(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllUsersWithTokensForSpecificSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/Users`);
			break;
		}

		case 'getAllSmapVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/MajorVersions`);
			break;
		}

		case 'getListOfAllSmaps':
			responseData = await smaponeApiRequest.call(this, 'GET', '/intern/Smaps');
			break;

		case 'createEmptyAppOrCreateByTemplate': {
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', '/intern/Smaps', body);
			break;
		}

		case 'getDetailsForSpecificSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}`);
			break;
		}

		case 'deleteSpecificSmapIncludingReferences': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'DELETE', `/intern/Smaps/${encodeURIComponent(smapId)}`);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smaps".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}
