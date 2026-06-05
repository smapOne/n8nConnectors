import {
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { accountDescription } from './resources/intern/account/description';
import { executeAccount } from './resources/intern/account/execute';
import { bricksDescription } from './resources/intern/bricks/description';
import { executeBricks } from './resources/intern/bricks/execute';
import { bricksDefinitionDescription } from './resources/intern/bricksDefinition/description';
import { executeBricksDefinition } from './resources/intern/bricksDefinition/execute';
//import { corporationManagementDescription } from './resources/intern/corporationManagement/description';
//import { executeCorporationManagement } from './resources/intern/corporationManagement/execute';
import { dataSourceDescription } from './resources/intern/dataSource/description';
import { executeDataSource } from './resources/intern/dataSource/execute';
import { dataSourceDefinitionDescription } from './resources/intern/dataSourceDefinition/description';
import { executeDataSourceDefinition } from './resources/intern/dataSourceDefinition/execute';
import { dataSourceVersionDescription } from './resources/intern/dataSourceVersion/description';
import { executeDataSourceVersion } from './resources/intern/dataSourceVersion/execute';
//import { exportTemplateDescription } from './resources/intern/exportTemplate/description';
//import { executeExportTemplate } from './resources/intern/exportTemplate/execute';
import { groupsDescription } from './resources/intern/groups/description';
import { executeGroups } from './resources/intern/groups/execute';
import { helperDescription } from './resources/intern/helper/description';
import { executeHelper } from './resources/intern/helper/execute';
import { scenariosDescription } from './resources/intern/scenarios/description';
import { executeScenarios } from './resources/intern/scenarios/execute';
import { smapsDescription } from './resources/intern/smaps/description';
import { executeSmaps } from './resources/intern/smaps/execute';
import { smapsDataDescription } from './resources/intern/smapsData/description';
import { executeSmapsData } from './resources/intern/smapsData/execute';
import { smapsDefinitionDescription } from './resources/intern/smapsDefinition/description';
import { executeSmapsDefinition } from './resources/intern/smapsDefinition/execute';
import { smapsNotificationDescription } from './resources/intern/smapsNotification/description';
import { executeSmapsNotification } from './resources/intern/smapsNotification/execute';
import { smapsTasksDescription } from './resources/intern/smapsTasks/description';
import { executeSmapsTasks } from './resources/intern/smapsTasks/execute';
//import { smapsTokensDescription } from './resources/intern/smapsTokens/description';
//import { executeSmapsTokens } from './resources/intern/smapsTokens/execute';
import { smapsVersionsDescription } from './resources/intern/smapsVersions/description';
import { executeSmapsVersions } from './resources/intern/smapsVersions/execute';
//import { subscriptionsDescription } from './resources/intern/subscriptions/description';
//import { executeSubscriptions } from './resources/intern/subscriptions/execute';
//import { subscriptionsTokensDescription } from './resources/intern/subscriptionsTokens/description';
//import { executeSubscriptionsTokens } from './resources/intern/subscriptionsTokens/execute';
import { templatesDescription } from './resources/intern/templates/description';
import { executeTemplates } from './resources/intern/templates/execute';
import { userImportDescription } from './resources/intern/userImport/description';
import { executeUserImport } from './resources/intern/userImport/execute';
import { usersDescription } from './resources/intern/users/description';
import { executeUsers } from './resources/intern/users/execute';
import { usersTokensDescription } from './resources/intern/usersTokens/description';
import { executeUsersTokens } from './resources/intern/usersTokens/execute';
import { previewSmapsDescription } from './resources/preview/smaps/description';
import { executePreviewSmaps } from './resources/preview/smaps/execute';
import { previewSmapsRecordsDescription } from './resources/preview/smapsRecords/description';
import { executePreviewSmapsRecords } from './resources/preview/smapsRecords/execute';
import { previewSmapsTasksDescription } from './resources/preview/smapsTasks/description';
import { executePreviewSmapsTasks } from './resources/preview/smapsTasks/execute';
import { externalScimDescription } from './resources/external/scim/description';
import { executeExternalScim } from './resources/external/scim/execute';

export class Smapone implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smapone',
		name: 'smapone',
		icon: 'file:icons/smapone.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Smapone API',
		defaults: {
			name: 'Smapone',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'smaponeApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'API',
				name: 'apiScope',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Intern',
						value: 'intern',
					},
					{
						name: 'Preview',
						value: 'preview',
					},
					{
						name: 'External',
						value: 'external',
					},
				],
				default: 'intern',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						apiScope: ['intern'],
					},
				},
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Bricks',
						value: 'bricks',
					},
					{
						name: 'BricksDefinition',
						value: 'bricksDefinition',
					},
					/*{
						name: 'CorporationManagement',
						value: 'corporationManagement',
					},*/
					{
						name: 'DataSource',
						value: 'dataSource',
					},
					{
						name: 'DataSourceDefinition',
						value: 'dataSourceDefinition',
					},
					{
						name: 'DataSourceVersion',
						value: 'dataSourceVersion',
					},
					/*{
						name: 'ExportTemplate',
						value: 'exportTemplate',
					},*/
					{
						name: 'Groups',
						value: 'groups',
					},
					{
						name: 'Helper',
						value: 'helper',
					},
					{
						name: 'Scenarios',
						value: 'scenarios',
					},
					{
						name: 'Smaps',
						value: 'smaps',
					},
					{
						name: 'SmapsData',
						value: 'smapsData',
					},
					{
						name: 'SmapsDefinition',
						value: 'smapsDefinition',
					},
					{
						name: 'SmapsNotification',
						value: 'smapsNotification',
					},
					{
						name: 'SmapsTasks',
						value: 'smapsTasks',
					},
					/*{
						name: 'SmapsTokens',
						value: 'smapsTokens',
					},*/
					{
						name: 'SmapsVersions',
						value: 'smapsVersions',
					},
					/*{
						name: 'Subscriptions',
						value: 'subscriptions',
					},
					{
						name: 'SubscriptionsTokens',
						value: 'subscriptionsTokens',
					},*/
					{
						name: 'Templates',
						value: 'templates',
					},
					{
						name: 'UserImport',
						value: 'userImport',
					},
					{
						name: 'Users',
						value: 'users',
					},
					{
						name: 'UsersTokens',
						value: 'usersTokens',
					},
				],
				default: 'account',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						apiScope: ['preview'],
					},
				},
				options: [
					{
						name: '[Preview] Smaps',
						value: 'previewSmaps',
					},
					{
						name: '[Preview] SmapsRecords',
						value: 'previewSmapsRecords',
					},
					{
						name: '[Preview] SmapsTasks',
						value: 'previewSmapsTasks',
					},
				],
				default: 'previewSmaps',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						apiScope: ['external'],
					},
				},
				options: [
					{
						name: '[External] SCIM',
						value: 'externalScim',
					},
				],
				default: 'externalScim',
			},

			//intern
			...accountDescription,
			...bricksDescription,
			...bricksDefinitionDescription,
			//...corporationManagementDescription,
			...dataSourceDescription,
			...dataSourceDefinitionDescription,
			...dataSourceVersionDescription,
			//...exportTemplateDescription,
			...groupsDescription,
			...helperDescription,
			...scenariosDescription,
			...smapsDescription,
			...smapsDataDescription,
			...smapsDefinitionDescription,
			...smapsNotificationDescription,
			...smapsTasksDescription,
			//...smapsTokensDescription,
			...smapsVersionsDescription,
			//...subscriptionsDescription,
			//...subscriptionsTokensDescription,
			...templatesDescription,
			...userImportDescription,
			...usersDescription,
			...usersTokensDescription,

			//preview
			...previewSmapsDescription,
			...previewSmapsRecordsDescription,
			...previewSmapsTasksDescription,

			//external
			...externalScimDescription,
		],
		
	};

		async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {

				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				/*console.log(
					'Operation:',
					operation,
					'---',
					JSON.stringify(items[i], null, 2),
				);*/

				let responseData;

				switch (resource) {
					//intern
					case 'account':
						responseData = await executeAccount.call(
							this,
							i,
							operation,
						);
						
						break;
					
					case 'bricks':
						responseData = await executeBricks.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'bricksDefinition':
						responseData = await executeBricksDefinition.call(
							this,
							i,
							operation,
						);
					
						break;
					
					/*case 'corporationManagement':
						responseData = await executeCorporationManagement.call(
							this,
							i,
							operation,
						);
					
						break;*/
					
					case 'dataSource':
						responseData = await executeDataSource.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'dataSourceDefinition':
						responseData = await executeDataSourceDefinition.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'dataSourceVersion':
						responseData = await executeDataSourceVersion.call(
							this,
							i,
							operation,
						);
					
						break;
					
					/*case 'exportTemplate':
						responseData = await executeExportTemplate.call(
							this,
							i,
							operation,
						);
					
						break;*/
					
					case 'groups':
						responseData = await executeGroups.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'helper':
						responseData = await executeHelper.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'scenarios':
						responseData = await executeScenarios.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'smaps':
						responseData = await executeSmaps.call(
							this,
							i,
							operation,
						);
					
						break;
					
					case 'smapsData':
						responseData = await executeSmapsData.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'smapsDefinition':
						responseData = await executeSmapsDefinition.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'smapsNotification':
						responseData = await executeSmapsNotification.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'smapsTasks':
						responseData = await executeSmapsTasks.call(
							this,
							i,
							operation,
						);
					
						break;

					/*case 'smapsTokens':
						responseData = await executeSmapsTokens.call(
							this,
							i,
							operation,
						);
					
						break;*/

					case 'smapsVersions':
						responseData = await executeSmapsVersions.call(
							this,
							i,
							operation,
						);
					
						break;

					/*case 'subscriptions':
						responseData = await executeSubscriptions.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'subscriptionsTokens':
						responseData = await executeSubscriptionsTokens.call(
							this,
							i,
							operation,
						);
					
						break;*/

					case 'templates':
						responseData = await executeTemplates.call(
							this,
							i,
							operation,
						);

						break;

					case 'userImport':
						responseData = await executeUserImport.call(
							this,
							i,
							operation,
						);

						break;

					case 'users':
						responseData = await executeUsers.call(
							this,
							i,
							operation,
						);

						break;

					case 'usersTokens':
						responseData = await executeUsersTokens.call(
							this,
							i,
							operation,
						);
					
						break;

					//preview
					case 'previewSmaps':
						responseData = await executePreviewSmaps.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'previewSmapsRecords':
						responseData = await executePreviewSmapsRecords.call(
							this,
							i,
							operation,
						);
					
						break;

					case 'previewSmapsTasks':
						responseData = await executePreviewSmapsTasks.call(
							this,
							i,
							operation,
						);
					
						break;


					//external
					case 'externalScim':
						responseData = await executeExternalScim.call(
							this,
							i,
							operation,
						);
					
						break;

					default:
						throw new NodeApiError(this.getNode(), {
							message: `The resource "${resource}" is not supported.`,
						});
				}

				if (responseData === undefined) {
					throw new NodeApiError(this.getNode(), {message: 'The operation "${operation}" is not supported for resource "${resource}".'});
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData),
					{
						itemData: {
							item: i,
						},
					},
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error instanceof Error ? error.message : String(error),
						},
						pairedItem: {
							item: i,
						},
					});
					continue;
				}

				throw new NodeApiError(this.getNode(), error as JsonObject);
			}
		}

		return [returnData];
	}
}