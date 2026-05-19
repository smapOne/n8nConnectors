import type { INodeProperties } from 'n8n-workflow';

export const scenariosDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiScope: ['intern'],
				resource: ['scenarios'],
			},
		},
		options: [
			{
				name: 'Load List of Company Scenarios',
				value: 'loadListOfCompanyScenarios',
				action: 'Load the list of company scenarios',
			},
			{
				name: 'Load List of Custom Scenarios',
				value: 'loadListOfCustomScenarios',
				action: 'Load the list of custom scenarios',
			},
			{
				name: 'Load List of Predefined Scenarios by Language',
				value: 'loadListOfPredefinedScenariosByLanguage',
				action: 'Load the list of predefined scenarios by language',
			},
		],
		default: 'loadListOfCompanyScenarios',
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
				resource: ['scenarios'],
				operation: ['loadListOfPredefinedScenariosByLanguage'],
			},
		},
		description: 'Language of predefined scenarios',
	},
];