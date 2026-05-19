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
import { executeCorporationManagement } from './resources/intern/corporationManagement/execute';
import { corporationManagementDescription } from './resources/intern/corporationManagement/description';
import { dataSourceDescription } from './resources/intern/dataSource/description';
import { executeDataSource } from './resources/intern/dataSource/execute';
import { dataSourceDefinitionDescription } from './resources/intern/dataSourceDefinition/description';
import { executeDataSourceDefinition } from './resources/intern/dataSourceDefinition/execute';
import { dataSourceVersionDescription } from './resources/intern/dataSourceVersion/description';
import { executeDataSourceVersion } from './resources/intern/dataSourceVersion/execute';
import { exportTemplateDescription } from './resources/intern/exportTemplate/description';
import { executeExportTemplate } from './resources/intern/exportTemplate/execute';
import { groupsDescription } from './resources/intern/groups/description';
import { executeGroups } from './resources/intern/groups/execute';
import { helperDescription } from './resources/intern/helper/description';
import { executeHelper } from './resources/intern/helper/execute';
import { scenariosDescription } from './resources/intern/scenarios/description';
import { executeScenarios } from './resources/intern/scenarios/execute';
import { smapsDescription } from './resources/intern/smaps/description';
import { executeSmaps } from './resources/intern/smaps/execute';
import { executeSmapsData } from './resources/intern/smapsData/execute';
import { smapsDataDescription } from './resources/intern/smapsData/description';
import { smapsDefinitionDescription } from './resources/intern/smapsDefinition/description';
import { executeSmapsDefinition } from './resources/intern/smapsDefinition/execute';
import { executeSmapsNotification } from './resources/intern/smapsNotification/execute';
import { smapsNotificationDescription } from './resources/intern/smapsNotification/description';
import { smapsTasksDescription } from './resources/intern/smapsTasks/description';
import { executeSmapsTasks } from './resources/intern/smapsTasks/execute';
import { executeSmapsTokens } from './resources/intern/smapsTokens/execute';
import { smapsTokensDescription } from './resources/intern/smapsTokens/description';
import { smapsVersionsDescription } from './resources/intern/smapsVersions/description';
import { executeSmapsVersions } from './resources/intern/smapsVersions/execute';

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
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
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
					{
						name: 'CorporationManagement',
						value: 'corporationManagement',
					},
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
					{
						name: 'ExportTemplate',
						value: 'exportTemplate',
					},
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
					{
						name: 'SmapsTokens',
						value: 'smapsTokens',
					},
					{
						name: 'SmapsVersions',
						value: 'smapsVersions',
					},
				],
				default: 'account',
			},

			...accountDescription,
			...bricksDescription,
			...bricksDefinitionDescription,
			...corporationManagementDescription,
			...dataSourceDescription,
			...dataSourceDefinitionDescription,
			...dataSourceVersionDescription,
			...exportTemplateDescription,
			...groupsDescription,
			...helperDescription,
			...scenariosDescription,
			...smapsDescription,
			...smapsDataDescription,
			...smapsDefinitionDescription,
			...smapsNotificationDescription,
			...smapsTasksDescription,
			...smapsTokensDescription,
			...smapsVersionsDescription,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			const resource = this.getNodeParameter('resource', i) as string;
			const operation = this.getNodeParameter('operation', i) as string;

			let responseData;

			switch (resource) {
				case 'account':
					responseData = await executeAccount.call(
						this,
						i,
						operation,
					);
					
					returnData.push(...responseData);
					break;
				
				case 'bricks':
					responseData = await executeBricks.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'bricksDefinition':
					responseData = await executeBricksDefinition.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'corporationManagement':
					responseData = await executeCorporationManagement.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'dataSource':
					responseData = await executeDataSource.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'dataSourceDefinition':
					responseData = await executeDataSourceDefinition.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'dataSourceVersion':
					responseData = await executeDataSourceVersion.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'exportTemplate':
					responseData = await executeExportTemplate.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'groups':
					responseData = await executeGroups.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'helper':
					responseData = await executeHelper.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'scenarios':
					responseData = await executeScenarios.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'smaps':
					responseData = await executeSmaps.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;
				
				case 'smapsData':
					responseData = await executeSmapsData.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'smapsDefinition':
					responseData = await executeSmapsDefinition.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'smapsNotification':
					responseData = await executeSmapsNotification.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'smapsTasks':
					responseData = await executeSmapsTasks.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'smapsTokens':
					responseData = await executeSmapsTokens.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
					break;

				case 'smapsVersions':
					responseData = await executeSmapsVersions.call(
						this,
						i,
						operation,
					);
				
					returnData.push(...responseData);
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