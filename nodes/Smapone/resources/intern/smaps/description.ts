import type { INodeProperties } from 'n8n-workflow';

export const smapsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { 
			show: { 
				apiScope: ['intern'],
				resource: ['smaps'] 
			} 
		},
		options: [
			{ name: 'Create Empty App or Create by Template', value: 'createEmptyAppOrCreateByTemplate', action: 'Create an empty app or create by a template' },
			{ name: 'Delete Existing External Access Links for Requested Smap', value: 'deleteExistingExternalAccessLinksForRequestedSmap', action: 'Delete the existing external access links for requested smap' },
			{ name: 'Delete Specific Smap Including References', value: 'deleteSpecificSmapIncludingReferences', action: 'Delete a specific smap including referenced datasources licenses and records' },
			{ name: 'Disable Specified Feature for Smap', value: 'disableSpecifiedFeatureForSmap', action: 'Disable the specified feature for the smap' },
			{ name: 'Enable Specified Feature for Smap', value: 'enableSpecifiedFeatureForSmap', action: 'Enable the specified feature for the smap' },
			{ name: 'Generate New External Access Links for Requested Smap', value: 'generateNewExternalAccessLinksForRequestedSmap', action: 'Generate a new external access links for requested smap' },
			{ name: 'Get All Smap Versions', value: 'getAllSmapVersions', action: 'Get all smap versions' },
			{ name: 'Get All Users With Tokens for Specific Smap', value: 'getAllUsersWithTokensForSpecificSmap', action: 'Get all users with tokens for a specific smap' },
			{ name: 'Get Asset for Smap', value: 'getAssetForSmap', action: 'Get the asset for a smap' },
			{ name: 'Get Details for Specific Smap', value: 'getDetailsForSpecificSmap', action: 'Get details for a specific smap' },
			{ name: 'Get External Access Links for Requested Smap', value: 'getExternalAccessLinksForRequestedSmap', action: 'Get the external access links for requested smap' },
			{ name: 'Get External Data Access Default Language Value for Smap', value: 'getExternalDataAccessDefaultLanguageValueForSmap', action: 'Get the external data access default language value for smap' },
			{ name: 'Get List of All Smaps', value: 'getListOfAllSmaps', action: 'Get the list of all smaps' },
			{ name: 'Query AI to Create Definition Title and Description', value: 'queryAiToCreateDefinitionTitleAndDescription', action: 'Query AI to create definition title and description for a smap from a process description' },
			{ name: 'Query AI to Create Icon From Description', value: 'queryAiToCreateIconFromDescription', action: 'Query AI to create an icon for a smap from a process description' },
			{ name: 'Regenerate Existing Access Link for Requested Smap', value: 'regenerateExistingAccessLinkForRequestedSmap', action: 'Regenerate an existing access link for the requested smap' },
			{ name: 'Set External Data Access Default Language Value for Smap', value: 'setExternalDataAccessDefaultLanguageValueForSmap', action: 'Set the external data access default language value for smap' },
			{ name: 'Upload New Asset for Smap', value: 'uploadNewAssetForSmap', action: 'Upload a new asset for a smap' },
		],
		default: 'getListOfAllSmaps',
	},
	{
		displayName: 'Smap ID',
		name: 'smapId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: [
					'deleteExistingExternalAccessLinksForRequestedSmap',
					'deleteSpecificSmapIncludingReferences',
					'disableSpecifiedFeatureForSmap',
					'enableSpecifiedFeatureForSmap',
					'generateNewExternalAccessLinksForRequestedSmap',
					'getAllSmapVersions',
					'getAllUsersWithTokensForSpecificSmap',
					'getAssetForSmap',
					'getDetailsForSpecificSmap',
					'getExternalAccessLinksForRequestedSmap',
					'getExternalDataAccessDefaultLanguageValueForSmap',
					'regenerateExistingAccessLinkForRequestedSmap',
					'setExternalDataAccessDefaultLanguageValueForSmap',
					'uploadNewAssetForSmap',
				],
			},
		},
	},
	{
		displayName: 'Feature Key',
		name: 'featureKey',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: ['enableSpecifiedFeatureForSmap', 'disableSpecifiedFeatureForSmap'],
			},
		},
	},
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: ['getAssetForSmap'],
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		required: true,
		default: 'en',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: ['setExternalDataAccessDefaultLanguageValueForSmap'],
			},
		},
	},
	{
		displayName: 'Request Body',
		name: 'body',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['smaps'],
				operation: [
					'createEmptyAppOrCreateByTemplate',
					'generateNewExternalAccessLinksForRequestedSmap',
					'regenerateExistingAccessLinkForRequestedSmap',
					'uploadNewAssetForSmap',
					'queryAiToCreateDefinitionTitleAndDescription',
					'queryAiToCreateIconFromDescription',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];