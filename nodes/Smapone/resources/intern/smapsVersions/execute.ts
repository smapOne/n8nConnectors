import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsVersions(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllSmapVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions`,
			);
			break;
		}

		case 'publishSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions`,
				body,
			);
			break;
		}

		case 'getSpecificSmapVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(version)}`,
			);
			break;
		}

		case 'deleteCertainVersionOfSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Versions/${encodeURIComponent(version)}`,
			);
			break;
		}

		case 'loadSchemaForDataRecord': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(version)}/Schema`,
			);
			break;
		}

		case 'updateAllDataSourcesToLatestMinorVersion': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/Current/DataSources/Update`,
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsVersions".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}