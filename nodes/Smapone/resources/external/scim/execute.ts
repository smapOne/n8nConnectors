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
			const attributes = this.getNodeParameter('attributes', i) as string;
			const sortBy = this.getNodeParameter('sortBy', i) as string;
			const sortOrder = this.getNodeParameter('sortOrder', i) as string;
			const startIndex = this.getNodeParameter('startIndex', i) as number;
			const count = this.getNodeParameter('count', i) as number;
			const qs: IDataObject = {};

			if (filter) {
				qs.filter = filter;
			}
			if (attributes) {
				qs.attributes = attributes;
			}
			if (sortBy) {
				qs.sortBy = sortBy;
			}
			if (sortOrder) {
				qs.sortOrder = sortOrder;
			}
			if (startIndex) {
				qs.startIndex = startIndex;
			}
			if (count) {
				qs.count = count;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/external/SCIM/Groups',
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
				'/external/SCIM/Groups',
				body,
			);
			break;
		}

		case 'getGroupByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/external/SCIM/Groups/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'deleteGroupByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/external/SCIM/Groups/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'updateGroupDetailsOrMembers': {
			const id = this.getNodeParameter('id', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PATCH',
				`/external/SCIM/Groups/${encodeURIComponent(id)}`,
				body,
			);
			break;
		}

		case 'getUserListByFilter': {
						const filter = this.getNodeParameter('filter', i) as string;
			const attributes = this.getNodeParameter('attributes', i) as string;
			const sortBy = this.getNodeParameter('sortBy', i) as string;
			const sortOrder = this.getNodeParameter('sortOrder', i) as string;
			const startIndex = this.getNodeParameter('startIndex', i) as number;
			const count = this.getNodeParameter('count', i) as number;
			const qs: IDataObject = {};

			if (filter) {
				qs.filter = filter;
			}
			if (attributes) {
				qs.attributes = attributes;
			}
			if (sortBy) {
				qs.sortBy = sortBy;
			}
			if (sortOrder) {
				qs.sortOrder = sortOrder;
			}
			if (startIndex) {
				qs.startIndex = startIndex;
			}
			if (count) {
				qs.count = count;
			}

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/external/SCIM/Users',
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
				'/external/SCIM/Users',
				body,
			);
			break;
		}

		case 'getUserByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/external/SCIM/Users/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'deleteUserByIdentifier': {
			const id = this.getNodeParameter('id', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'DELETE',
				`/external/SCIM/Users/${encodeURIComponent(id)}`,
			);
			break;
		}

		case 'updateUserDetailsOrRole': {
			const id = this.getNodeParameter('id', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PATCH',
				`/external/SCIM/Users/${encodeURIComponent(id)}`,
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