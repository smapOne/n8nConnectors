import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeExternalScim(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getGroupListByFilter': {
			const filter = this.getNodeParameter('filter', i) as string;
			const qs: IDataObject = {};

			if (filter) {
				qs.filter = filter;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/SCIM/Groups',
				{},
				qs,
			);
			break;
		}

		case 'createNewGroup': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/SCIM/Groups',
				body,
			);
			break;
		}

		case 'getGroupByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/SCIM/Groups/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'deleteGroupByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/SCIM/Groups/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'updateGroupDetailsOrMembers': {
			const id = this.getNodeParameter('id', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PATCH',
				`/SCIM/Groups/${encodeURIComponent(id)}`,
				body,
			);
			break;
		}

		case 'getUserListByFilter': {
			const filter = this.getNodeParameter('filter', i) as string;
			const qs: IDataObject = {};

			if (filter) {
				qs.filter = filter;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/SCIM/Users',
				{},
				qs,
			);
			break;
		}

		case 'createNewUser': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/SCIM/Users',
				body,
			);
			break;
		}

		case 'getUserByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/SCIM/Users/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'deleteUserByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/SCIM/Users/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'updateUserDetailsOrRole': {
			const id = this.getNodeParameter('id', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PATCH',
				`/SCIM/Users/${encodeURIComponent(id)}`,
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "externalScim".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}