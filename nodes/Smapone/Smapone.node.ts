 
import {
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { internResources } from './resources/internRegistry';
import { previewResources } from './resources/previewRegistry';
import type { ResourceDefinition, ResourceExecuteFn } from './resources/types';

function buildResourceOptions(resources: ResourceDefinition[]) {
	return resources.map((resource) => ({
		name: resource.displayName,
		value: resource.value,
	}));
}

function buildResourceDescriptions(resources: ResourceDefinition[]) {
	return resources.flatMap((resource) => resource.description);
}

function buildExecuteLookup(resources: ResourceDefinition[]): Record<string, ResourceExecuteFn> {
	return Object.fromEntries(resources.map((resource) => [resource.value, resource.execute]));
}

const resourceExecuteLookup = buildExecuteLookup([...internResources, ...previewResources]);

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
				options: buildResourceOptions(internResources),
				default: 'smaps',
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
				options: buildResourceOptions(previewResources),
				default: 'previewSmaps',
			},
			...buildResourceDescriptions(internResources),
			...buildResourceDescriptions(previewResources),
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;

				const executeResource = resourceExecuteLookup[resource];
				if (!executeResource) {
					throw new NodeApiError(this.getNode(), {
						message: `The resource "${resource}" is not supported.`,
					});
				}

				const responseData = await executeResource.call(this, i, operation);

				if (responseData === undefined) {
					throw new NodeApiError(this.getNode(), {
						message: `The operation "${operation}" is not supported for resource "${resource}".`,
					});
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
