import { executeSmaps } from '../../../../nodes/Smapone/resources/intern/smaps/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id test';
const featureKey = 'feature/key';
const assetId = 'asset/id';
const encodedSmapId = encodeURIComponent(smapId);
const encodedFeatureKey = encodeURIComponent(featureKey);
const encodedAssetId = encodeURIComponent(assetId);

createExecuteTestSuite('smaps', executeSmaps, [
	{
		operation: 'getAllUsersWithTokensForSpecificSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Users`,
		parameters: { smapId },
	},
	{
		operation: 'getExternalAccessLinksForRequestedSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/ExternalAccess`,
		parameters: { smapId },
	},
	{
		operation: 'generateNewExternalAccessLinksForRequestedSmap',
		method: 'POST',
		endpoint: `/intern/Smaps/${encodedSmapId}/ExternalAccess`,
		parameters: { smapId, body: { expiresInDays: 7 } },
		body: { expiresInDays: 7 },
	},
	{
		operation: 'deleteExistingExternalAccessLinksForRequestedSmap',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/ExternalAccess`,
		parameters: { smapId },
	},
	{
		operation: 'regenerateExistingAccessLinkForRequestedSmap',
		method: 'PATCH',
		endpoint: `/intern/Smaps/${encodedSmapId}/ExternalAccess`,
		parameters: { smapId, body: { linkId: 'link-1' } },
		body: { linkId: 'link-1' },
	},
	{
		operation: 'getAllSmapVersions',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/MajorVersions`,
		parameters: { smapId },
	},
	{
		operation: 'getListOfAllSmaps',
		method: 'GET',
		endpoint: '/intern/Smaps',
	},
	{
		operation: 'createEmptyAppOrCreateByTemplate',
		method: 'POST',
		endpoint: '/intern/Smaps',
		parameters: { body: { title: 'New Smap' } },
		body: { title: 'New Smap' },
	},
	{
		operation: 'getDetailsForSpecificSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}`,
		parameters: { smapId },
	},
	{
		operation: 'deleteSpecificSmapIncludingReferences',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}`,
		parameters: { smapId },
	},
	{
		operation: 'enableSpecifiedFeatureForSmap',
		method: 'POST',
		endpoint: `/intern/Smaps/${encodedSmapId}/Feature/${encodedFeatureKey}`,
		parameters: { smapId, featureKey },
	},
	{
		operation: 'disableSpecifiedFeatureForSmap',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/Feature/${encodedFeatureKey}`,
		parameters: { smapId, featureKey },
	},
	{
		operation: 'getExternalDataAccessDefaultLanguageValueForSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/settings/ExternalDataAccessDefaultLanguage`,
		parameters: { smapId },
	},
	{
		operation: 'setExternalDataAccessDefaultLanguageValueForSmap',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/settings/ExternalDataAccessDefaultLanguage`,
		parameters: { smapId, body: 'de' },
		body: { body: 'de' },
	},
	{
		operation: 'uploadNewAssetForSmap',
		method: 'POST',
		endpoint: `/intern/Smaps/${encodedSmapId}/Asset`,
		parameters: { smapId, body: { name: 'logo.png' } },
		body: { name: 'logo.png' },
	},
	{
		operation: 'getAssetForSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Asset/${encodedAssetId}`,
		parameters: { smapId, assetId },
	},
	{
		operation: 'queryAiToCreateDefinitionTitleAndDescription',
		method: 'POST',
		endpoint: '/intern/Smaps/Ai/CreateFromDescription',
		parameters: { body: { description: 'Inventory app' } },
		body: { description: 'Inventory app' },
	},
	{
		operation: 'queryAiToCreateIconFromDescription',
		method: 'POST',
		endpoint: '/intern/Smaps/Ai/CreateIconFromDescription',
		parameters: { body: { description: 'Blue box icon' } },
		body: { description: 'Blue box icon' },
	},
]);
