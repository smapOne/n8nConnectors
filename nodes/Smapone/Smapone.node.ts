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