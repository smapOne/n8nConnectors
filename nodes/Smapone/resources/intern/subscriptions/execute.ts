/*import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSubscriptions(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllGroups': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(subscriptionId)}/Groups`,
			);
			break;
		}

		case 'getDetailsOfGroupWithMembers': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const groupId = this.getNodeParameter('groupId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Groups/${encodeURIComponent(groupId)}`,
			);
			break;
		}

		case 'addSmapToGroup': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const groupId = this.getNodeParameter('groupId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Groups/${encodeURIComponent(groupId)}/Smaps/${encodeURIComponent(smapId)}`,
			);
			break;
		}

		case 'deleteSmapFromGroup': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const groupId = this.getNodeParameter('groupId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Groups/${encodeURIComponent(groupId)}/Smaps/${encodeURIComponent(smapId)}`,
			);
			break;
		}

		case 'getAllUsersWithTokensForSpecificSmap': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Smaps/${encodeURIComponent(smapId)}/Users`,
			);
			break;
		}

		case 'getAllUsers': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(subscriptionId)}/Users`,
			);
			break;
		}

		case 'getUserDetails': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Users/${encodeURIComponent(userId)}`,
			);
			break;
		}

		case 'getListOfAllSmaps': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(subscriptionId)}/Smaps`,
			);
			break;
		}

		case 'getListOfAllManagedSubscriptions':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Subscriptions',
			);
			break;

		case 'getDetailsForSpecificManagedSubscription': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(subscriptionId)}`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "subscriptions".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}*/