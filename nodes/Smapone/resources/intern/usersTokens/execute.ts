import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeUsersTokens(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getUserDetails': {
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Users/${encodeURIComponent(userId)}/Tokens`,
			);

			break;
		}

		case 'wipeAllUserTokens': {
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Users/${encodeURIComponent(userId)}/Tokens`,
			);

			break;
		}

		case 'generateQrCodeForGivenSmap': {
			const userId = this.getNodeParameter('userId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Users/${encodeURIComponent(
					userId,
				)}/Tokens/${encodeURIComponent(tokenId)}/QrCode`,
			);

			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "usersTokens".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}