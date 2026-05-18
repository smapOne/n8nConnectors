import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeCorporationManagement(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'createNewCompany': {
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				'/intern/CorporationManagement/Company',
				body,
			);
			break;
		}

		case 'createNewInvitationForCompanyOwner': {
			const ownerId = this.getNodeParameter('ownerId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'POST',
				`/intern/CorporationManagement/Invitation/${encodeURIComponent(ownerId)}`,
				body,
			);
			break;
		}

		case 'getCompanyDetailsById': {
			const companyId = this.getNodeParameter('companyId', i) as string;

			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				`/intern/CorporationManagement/Company/${encodeURIComponent(companyId)}`,
			);
			break;
		}

		case 'getCorporationInformation':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/CorporationManagement/Corporation',
			);
			break;

		case 'getCorporationTotalLicenseContingentDetails':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/CorporationManagement/CorporationQuota',
			);
			break;

		case 'getListOfCompanies':
			responseData = await smaponeApiRequest.call(
				this,
				'GET',
				'/intern/CorporationManagement/Company',
			);
			break;

		case 'updateExistingCompany': {
			const companyId = this.getNodeParameter('companyId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;

			responseData = await smaponeApiRequest.call(
				this,
				'PUT',
				`/intern/CorporationManagement/Company/${encodeURIComponent(companyId)}`,
				body,
			);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "corporationManagement".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}