import { vi } from 'vitest';

import type {
	IDataObject,
	IExecuteFunctions,
	INode,
	INodeExecutionData,
} from 'n8n-workflow';

export interface MockExecuteFunctionsOptions {
	parameters?: Record<string, unknown>;
	itemIndex?: number;
}

export function createMockExecuteFunctions(
	options: MockExecuteFunctionsOptions = {},
): IExecuteFunctions {
	const { parameters = {}, itemIndex = 0 } = options;

	const node: INode = {
		id: 'test-node',
		name: 'Smapone',
		type: 'n8n-nodes-smapone.smapone',
		typeVersion: 1,
		position: [0, 0],
		parameters: {},
	};

	const mock: Partial<IExecuteFunctions> = {
		getNodeParameter: vi.fn((name: string, index: number) => {
			if (index !== itemIndex) {
				throw new Error(`Unexpected item index ${index}, expected ${itemIndex}`);
			}

			if (!(name in parameters)) {
				throw new Error(`Parameter "${name}" is not mocked`);
			}

			return parameters[name];
		}),
		getNode: vi.fn(() => node),
		helpers: {
			returnJsonArray: vi.fn(
				(data: IDataObject | IDataObject[]): INodeExecutionData[] => {
					const items = Array.isArray(data) ? data : [data];
					return items.map((json) => ({ json }));
				},
			),
		},
	};

	return mock as IExecuteFunctions;
}
