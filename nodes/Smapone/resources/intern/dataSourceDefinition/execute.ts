import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeDataSourceDefinition(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'retrieveLatestMinorVersionOfMajorVersionWithDataSourceDefinition': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/Major/${encodeURIComponent(
					majorVersion,
				)}/Definition`,
			);
			break;
		}

		case 'loadDataSourceDefinitionForGivenVersion': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const dataSourceVersion = this.getNodeParameter('dataSourceVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/${encodeURIComponent(
					dataSourceVersion,
				)}/Definition`,
			);
			break;
		}

		case 'loadValuesOfDataSourceForGivenVersion': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const dataSourceVersion = this.getNodeParameter('dataSourceVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/${encodeURIComponent(
					dataSourceVersion,
				)}/Definition/Values`,
			);
			break;
		}

		case 'createNewVersionForYourDataSource': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const dataSourceVersion = this.getNodeParameter('dataSourceVersion', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/${encodeURIComponent(
					dataSourceVersion,
				)}/Definition/Values`,
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "dataSourceDefinition".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}