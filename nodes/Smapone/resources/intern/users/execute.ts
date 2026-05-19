import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeUsers(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllUsers':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Users',
			);
			break;

		case 'createOrUpdateUsers': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/Users',
				body,
			);

			break;
		}

		case 'getUserDetails': {
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Users/${encodeURIComponent(userId)}`,
			);

			break;
		}

		case 'deleteSmapUser': {
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Users/${encodeURIComponent(userId)}`,
			);

			break;
		}

		case 'getAllGroupsUserIsPartOf': {
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Users/${encodeURIComponent(userId)}/memberOfGroups`,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "users".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}