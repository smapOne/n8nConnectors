/*import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSubscriptionsTokens(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllTokensForSmap': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Smaps/${encodeURIComponent(smapId)}/Tokens`,
			);

			break;
		}

		case 'createUserTokenAndPublishViaEmail': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Smaps/${encodeURIComponent(smapId)}/Tokens/User`,
				body,
			);

			break;
		}

		case 'getTokenOfSmap': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Smaps/${encodeURIComponent(
					smapId,
				)}/Tokens/${encodeURIComponent(tokenId)}`,
			);

			break;
		}

		case 'wipeTokenOfSmap': {
			const subscriptionId = this.getNodeParameter('subscriptionId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Subscriptions/${encodeURIComponent(
					subscriptionId,
				)}/Smaps/${encodeURIComponent(
					smapId,
				)}/Tokens/${encodeURIComponent(tokenId)}`,
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
				)}/Users/${encodeURIComponent(userId)}/Tokens`,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "subscriptionsTokens".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}*/