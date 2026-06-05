/*import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmapsTokens(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getDesignerToken': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/Designer`,
			);
			break;
		}

		case 'getAllTokensForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens`,
			);
			break;
		}

		case 'wipeSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens`,
			);
			break;
		}

		case 'createUserTokenAndPublishViaEmail': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/User`,
				body,
			);
			break;
		}

		case 'createAnonymousTokenAndPublishViaEmail': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/Anonymous`,
				body,
			);
			break;
		}

		case 'getTokenOfSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/${encodeURIComponent(tokenId)}`,
			);
			break;
		}

		case 'wipeTokenOfSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/${encodeURIComponent(tokenId)}`,
			);
			break;
		}

		case 'wipeGroupFromSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const groupId = this.getNodeParameter('groupId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/Group/${encodeURIComponent(
					groupId,
				)}`,
			);
			break;
		}

		case 'sendTokenAsEmail': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;
			const sendToUser = this.getNodeParameter('sendToUser', i) as boolean;

			const qs: IDataObject = {
				sendToUser,
			};

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/${encodeURIComponent(
					tokenId,
				)}/SendMail`,
				body,
				qs
			);
			break;
		}

		case 'generateQrCodeForGivenSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const tokenId = this.getNodeParameter('tokenId', i) as string;
			const target = this.getNodeParameter('target', i) as boolean;

			const qs: IDataObject = {};

			if (target) {
				qs.target = target;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Smaps/${encodeURIComponent(smapId)}/Tokens/${encodeURIComponent(
					tokenId,
				)}/QrCode`,
				{},
				qs
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smapsTokens".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}*/