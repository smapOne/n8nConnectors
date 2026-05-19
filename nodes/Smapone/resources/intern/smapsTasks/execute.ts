import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsTasks(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'changeStateOfTaskAndAssignTaskToUser': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const version = this.getNodeParameter('version', i) as string;
			const taskId = this.getNodeParameter('taskId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Smaps/${encodeURIComponent(
					smapId,
				)}/Versions/${encodeURIComponent(
					version,
				)}/Tasks/${encodeURIComponent(taskId)}/State`,
				body,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsTasks".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}