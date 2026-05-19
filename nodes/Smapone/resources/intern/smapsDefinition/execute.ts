import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsDefinition(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getTemplateForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Definition/ReportTemplate`,
			);

			break;
		}

		case 'loadDefinitionForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Definition`,
			);

			break;
		}

		case 'overwriteDefinitionOfGivenSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/0.0/Definition`,
				body,
			);

			break;
		}

		case 'validateDefinitionOfGivenSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/0.0/Definition/Validate`,
				body,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsDefinition".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}