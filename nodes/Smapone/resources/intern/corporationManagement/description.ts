import type { INodeProperties } from 'n8n-workflow';

export const corporationManagementDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['corporationManagement'],
			},
		},
		options: [
			{
				name: 'Create New Company',
				value: 'createNewCompany',
				action: 'Create a new company',
			},
			{
				name: 'Create New Invitation for Company Owner',
				value: 'createNewInvitationForCompanyOwner',
				action: 'Create a new invitation for a company owner',
			},
			{
				name: 'Get Company Details by ID',
				value: 'getCompanyDetailsById',
				action: 'Get company details by ID',
			},
			{
				name: 'Get Corporation Information',
				value: 'getCorporationInformation',
				action: 'Get corporation information',
			},
			{
				name: 'Get Corporation Total License Contingent Details',
				value: 'getCorporationTotalLicenseContingentDetails',
				action: 'Get corporation total license contingent details',
			},
			{
				name: 'Get List of Companies',
				value: 'getListOfCompanies',
				action: 'Get the list of companies',
			},
			{
				name: 'Update Existing Company',
				value: 'updateExistingCompany',
				action: 'Update an existing company',
			},
		],
		default: 'getListOfCompanies',
	},

	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['corporationManagement'],
				operation: ['getCompanyDetailsById', 'updateExistingCompany'],
			},
		},
	},

	{
		displayName: 'Owner ID',
		name: 'ownerId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['corporationManagement'],
				operation: ['createNewInvitationForCompanyOwner'],
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
				resource: ['corporationManagement'],
				operation: [
					'createNewCompany',
					'createNewInvitationForCompanyOwner',
					'updateExistingCompany',
				],
			},
		},
		description: 'JSON body sent to the API',
	},
];