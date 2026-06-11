import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

export type ResourceExecuteFn = (
	this: IExecuteFunctions,
	itemIndex: number,
	operation: string,
) => Promise<INodeExecutionData[] | undefined>;

export interface ResourceDefinition {
	displayName: string;
	value: string;
	description: INodeProperties[];
	execute: ResourceExecuteFn;
}
