import type { IDataObject, INodeExecutionData } from 'n8n-workflow';

import {
	setSmaponeApiDownloadRequestMock,
	setSmaponeApiRequestMock,
} from './helpers/apiMockStore';

const smaponeApiRequestMock = vi.hoisted(() =>
	vi.fn<
		[
			method: string,
			endpoint: string,
			body?: IDataObject | string,
			qs?: IDataObject,
			requestOptions?: {
				responseFormat?: 'json' | 'text';
				accept?: string;
			},
		],
		Promise<IDataObject | IDataObject[]>
	>(),
);

const smaponeApiDownloadRequestMock = vi.hoisted(() =>
	vi.fn<
		[endpoint: string, fileName: string, mimeType: string, qs?: IDataObject],
		Promise<INodeExecutionData[]>
	>(),
);

setSmaponeApiRequestMock(smaponeApiRequestMock);
setSmaponeApiDownloadRequestMock(smaponeApiDownloadRequestMock);

vi.mock('../nodes/Smapone/GenericFunctions', async (importOriginal) => {
	const actual = await importOriginal<typeof import('../nodes/Smapone/GenericFunctions')>();

	return {
		...actual,
		smaponeApiRequest: smaponeApiRequestMock,
		smaponeApiDownloadRequest: smaponeApiDownloadRequestMock,
	};
});

beforeEach(() => {
	smaponeApiRequestMock.mockReset();
	smaponeApiRequestMock.mockResolvedValue({ success: true });
	smaponeApiDownloadRequestMock.mockReset();
	smaponeApiDownloadRequestMock.mockResolvedValue([
		{
			json: { fileName: 'test.zip', mimeType: 'application/zip' },
			binary: { data: {} },
		},
	]);
});
