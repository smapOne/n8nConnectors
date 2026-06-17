import { NodeApiError } from 'n8n-workflow';
import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

import { createMockExecuteFunctions } from './createMockExecuteFunctions';
import {
	getSmaponeApiDownloadRequestMock,
	getSmaponeApiRequestMock,
} from './apiMockStore';

export interface OperationTestCase {
	operation: string;
	method: string;
	endpoint: string;
	parameters?: Record<string, unknown>;
	body?: IDataObject | string;
	qs?: IDataObject;
	requestOptions?: {
		responseFormat?: 'json' | 'text';
		accept?: string;
	};
	emptyBody?: boolean;
	downloadRequest?: boolean;
	fileNamePattern?: RegExp;
	mimeType?: string;
	testName?: string;
}

type ExecuteFn = (
	this: IExecuteFunctions,
	i: number,
	operation: string,
) => Promise<INodeExecutionData[]>;

export function createExecuteTestSuite(
	resourceName: string,
	executeFn: ExecuteFn,
	testCases: OperationTestCase[],
	options?: { defaultParameters?: Record<string, unknown> },
): void {
	describe(resourceName, () => {
		for (const testCase of testCases) {
			describe(testCase.operation, () => {
				it(
					testCase.testName ??
						(testCase.downloadRequest
							? `calls smaponeApiDownloadRequest with ${testCase.method} ${testCase.endpoint}`
							: `calls smaponeApiRequest with ${testCase.method} ${testCase.endpoint}`),
					async () => {
						const smaponeApiRequestMock = getSmaponeApiRequestMock();
						const smaponeApiDownloadRequestMock = getSmaponeApiDownloadRequestMock();
						const parameters = {
							...options?.defaultParameters,
							...testCase.parameters,
						};
						const mockCtx = createMockExecuteFunctions({ parameters });

						await executeFn.call(mockCtx, 0, testCase.operation);

						if (testCase.downloadRequest) {
							expect(smaponeApiRequestMock).not.toHaveBeenCalled();
							expect(smaponeApiDownloadRequestMock).toHaveBeenCalledOnce();

							const call = smaponeApiDownloadRequestMock.mock.calls[0];
							expect(call[0]).toBe(testCase.endpoint);

							if (testCase.fileNamePattern) {
								expect(call[1]).toMatch(testCase.fileNamePattern);
							}

							expect(call[2]).toBe(testCase.mimeType ?? 'application/zip');

							if (testCase.qs !== undefined) {
								expect(call[3]).toEqual(testCase.qs);
							}

							return;
						}

						expect(smaponeApiDownloadRequestMock).not.toHaveBeenCalled();
						expect(smaponeApiRequestMock).toHaveBeenCalledOnce();

						const call = smaponeApiRequestMock.mock.calls[0];
						expect(call[0]).toBe(testCase.method);
						expect(call[1]).toBe(testCase.endpoint);

						if (testCase.body !== undefined) {
							expect(call[2]).toEqual(testCase.body);
						} else if (testCase.emptyBody) {
							expect(call[2]).toEqual({});
						}

						if (testCase.qs !== undefined) {
							expect(call[3]).toEqual(testCase.qs);
						}

						if (testCase.requestOptions !== undefined) {
							expect(call[4]).toEqual(testCase.requestOptions);
						}
					},
				);
			});
		}

		it('throws NodeApiError for unsupported operation', async () => {
			const smaponeApiRequestMock = getSmaponeApiRequestMock();
			const smaponeApiDownloadRequestMock = getSmaponeApiDownloadRequestMock();
			const mockCtx = createMockExecuteFunctions(
				options?.defaultParameters
					? { parameters: options.defaultParameters }
					: {},
			);

			await expect(
				executeFn.call(mockCtx, 0, 'unsupportedOperation'),
			).rejects.toBeInstanceOf(NodeApiError);

			await expect(
				executeFn.call(mockCtx, 0, 'unsupportedOperation'),
			).rejects.toThrow(`not supported for resource "${resourceName}"`);

			expect(smaponeApiRequestMock).not.toHaveBeenCalled();
			expect(smaponeApiDownloadRequestMock).not.toHaveBeenCalled();
		});
	});
}
