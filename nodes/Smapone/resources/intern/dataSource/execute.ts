import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeDataSource(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'createNewDatasourceOfTypeStaticTable': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/DataSource',
				body,
			);
			break;
		}

		case 'deleteDatasourceIncludingAllSourceVersions': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}`,
			);
			break;
		}

		case 'getDataSourceWithMetaInformation': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}`,
			);
			break;
		}

		case 'getListWithMetaInformationOfAvailableDatasource':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/DataSource',
			);
			break;

		case 'updateTitleOfDataSource': {
			const dataSourceId = this.getNodeParameter('dataSourceId', i) as string;
			const title = this.getNodeParameter('title', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/DataSource/${encodeURIComponent(dataSourceId)}/title`,
				title,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "dataSource".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}