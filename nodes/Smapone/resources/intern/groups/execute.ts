import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeGroups(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllGroups':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/Groups',
			);
			break;

		case 'createEmptyGroup': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/Groups',
				body,
			);
			break;
		}

		case 'getDetailsOfGroupWithMembers': {
			const groupId = this.getNodeParameter('groupId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/Groups/${encodeURIComponent(groupId)}`,
			);
			break;
		}

		case 'editGroup': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Groups/${encodeURIComponent(groupId)}`,
				body,
			);
			break;
		}

		case 'deleteGroup': {
			const groupId = this.getNodeParameter('groupId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Groups/${encodeURIComponent(groupId)}`,
			);
			break;
		}

		case 'editGroupComment': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const comment = this.getNodeParameter('comment', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PATCH',
				`/intern/Groups/${encodeURIComponent(groupId)}/comment`,
				{ comment },
			);
			break;
		}

		case 'addUserToGroup': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Groups/${encodeURIComponent(groupId)}/Users/${encodeURIComponent(
					userId,
				)}`,
			);
			break;
		}

		case 'removeUserFromGroupAndAssignedSmaps': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const userId = this.getNodeParameter('userId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Groups/${encodeURIComponent(groupId)}/Users/${encodeURIComponent(
					userId,
				)}`,
			);
			break;
		}

		case 'addSmapToGroup': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/Groups/${encodeURIComponent(groupId)}/Smaps/${encodeURIComponent(
					smapId,
				)}`,
			);
			break;
		}

		case 'deleteSmapFromGroup': {
			const groupId = this.getNodeParameter('groupId', i) as string;
			const smapId = this.getNodeParameter('smapId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/intern/Groups/${encodeURIComponent(groupId)}/Smaps/${encodeURIComponent(
					smapId,
				)}`,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "groups".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}