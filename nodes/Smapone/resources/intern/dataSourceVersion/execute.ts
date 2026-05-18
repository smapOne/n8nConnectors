import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeDataSourceVersion(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'retrieveListOfVersionsOfSpecificDataSource': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions`,
			);
			break;
		}

		case 'updateStaticTableInStructureAndData': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions`,
				body,
			);
			break;
		}

		case 'retrieveSpecificVersionOfDataSource': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const dataSourceVersion = this.getNodeParameter('dataSourceVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/${encodeURIComponent(
					dataSourceVersion,
				)}`,
			);
			break;
		}

		case 'retrieveLatestMinorVersionOfMajorVersionWithDefinitionAndDataRows': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const majorVersion = this.getNodeParameter('majorVersion', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/Versions/${encodeURIComponent(
					majorVersion,
				)}/Values`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "dataSourceVersion".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}