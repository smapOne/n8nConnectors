import {
	NodeApiError,
	type IDataObject,
	type IExecuteFunctions,
	type INodeExecutionData,
} from 'n8n-workflow';

import { smaponeApiRequest } from '../../../GenericFunctions';

export async function executeSmaps(
	this: IExecuteFunctions,
	i: number,
	operation: string,
): Promise<INodeExecutionData[]> {
	let responseData: IDataObject | IDataObject[];

	switch (operation) {
		case 'getAllUsersWithTokensForSpecificSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/Users`);
			break;
		}

		case 'getExternalAccessLinksForRequestedSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/ExternalAccess`);
			break;
		}

		case 'generateNewExternalAccessLinksForRequestedSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', `/intern/Smaps/${encodeURIComponent(smapId)}/ExternalAccess`, body);
			break;
		}

		case 'deleteExistingExternalAccessLinksForRequestedSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'DELETE', `/intern/Smaps/${encodeURIComponent(smapId)}/ExternalAccess`);
			break;
		}

		case 'regenerateExistingAccessLinkForRequestedSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'PATCH', `/intern/Smaps/${encodeURIComponent(smapId)}/ExternalAccess`, body);
			break;
		}

		case 'getAllSmapVersions': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/MajorVersions`);
			break;
		}

		case 'getListOfAllSmaps':
			responseData = await smaponeApiRequest.call(this, 'GET', '/intern/Smaps');
			break;

		case 'createEmptyAppOrCreateByTemplate': {
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', '/intern/Smaps', body);
			break;
		}

		case 'getDetailsForSpecificSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}`);
			break;
		}

		case 'deleteSpecificSmapIncludingReferences': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'DELETE', `/intern/Smaps/${encodeURIComponent(smapId)}`);
			break;
		}

		case 'enableSpecifiedFeatureForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const featureKey = this.getNodeParameter('featureKey', i) as string;
			responseData = await smaponeApiRequest.call(this, 'POST', `/intern/Smaps/${encodeURIComponent(smapId)}/Feature/${encodeURIComponent(featureKey)}`);
			break;
		}

		case 'disableSpecifiedFeatureForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const featureKey = this.getNodeParameter('featureKey', i) as string;
			responseData = await smaponeApiRequest.call(this, 'DELETE', `/intern/Smaps/${encodeURIComponent(smapId)}/Feature/${encodeURIComponent(featureKey)}`);
			break;
		}

		case 'getExternalDataAccessDefaultLanguageValueForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/settings/ExternalDataAccessDefaultLanguage`);
			break;
		}

		case 'setExternalDataAccessDefaultLanguageValueForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const language = this.getNodeParameter('language', i) as string;
			responseData = await smaponeApiRequest.call(this, 'PUT', `/intern/Smaps/${encodeURIComponent(smapId)}/settings/ExternalDataAccessDefaultLanguage`, { language });
			break;
		}

		case 'uploadNewAssetForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', `/intern/Smaps/${encodeURIComponent(smapId)}/Asset`, body);
			break;
		}

		case 'getAssetForSmap': {
			const smapId = this.getNodeParameter('smapId', i) as string;
			const assetId = this.getNodeParameter('assetId', i) as string;
			responseData = await smaponeApiRequest.call(this, 'GET', `/intern/Smaps/${encodeURIComponent(smapId)}/Asset/${encodeURIComponent(assetId)}`);
			break;
		}

		case 'queryAiToCreateDefinitionTitleAndDescription': {
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', '/intern/Smaps/Ai/CreateFromDescription', body);
			break;
		}

		case 'queryAiToCreateIconFromDescription': {
			const body = this.getNodeParameter('body', i) as IDataObject;
			responseData = await smaponeApiRequest.call(this, 'POST', '/intern/Smaps/Ai/CreateIconFromDescription', body);
			break;
		}

		default:
			throw new NodeApiError(this.getNode(), {
				message: `The operation "${operation}" is not supported for resource "smaps".`,
			});
	}

	return this.helpers.returnJsonArray(responseData);
}