import type { IDataObject } from 'n8n-workflow';

export type SmaponeApiRequestOptions = {
	responseFormat?: 'json' | 'text';
	accept?: string;
};

export type SmaponeApiRequestCall = [
	method: string,
	endpoint: string,
	body?: IDataObject | string,
	qs?: IDataObject,
	requestOptions?: SmaponeApiRequestOptions,
];

export type SmaponeApiRequestMock = ((
	...args: SmaponeApiRequestCall
) => Promise<IDataObject | IDataObject[]>) & {
	mock: {
		calls: SmaponeApiRequestCall[];
	};
	mockReset: () => void;
	mockResolvedValue: (value: IDataObject | IDataObject[]) => SmaponeApiRequestMock;
};

export type SmaponeApiDownloadRequestCall = [
	endpoint: string,
	fileName: string,
	mimeType: string,
	qs?: IDataObject,
];

export type SmaponeApiDownloadRequestMock = ((
	...args: SmaponeApiDownloadRequestCall
) => Promise<import('n8n-workflow').INodeExecutionData[]>) & {
	mock: {
		calls: SmaponeApiDownloadRequestCall[];
	};
	mockReset: () => void;
	mockResolvedValue: (
		value: import('n8n-workflow').INodeExecutionData[],
	) => SmaponeApiDownloadRequestMock;
};

let smaponeApiRequestMock: SmaponeApiRequestMock | undefined;
let smaponeApiDownloadRequestMock: SmaponeApiDownloadRequestMock | undefined;

export function setSmaponeApiRequestMock(mock: SmaponeApiRequestMock): void {
	smaponeApiRequestMock = mock;
}

export function getSmaponeApiRequestMock(): SmaponeApiRequestMock {
	if (!smaponeApiRequestMock) {
		throw new Error('smaponeApiRequestMock is not initialized');
	}

	return smaponeApiRequestMock;
}

export function setSmaponeApiDownloadRequestMock(mock: SmaponeApiDownloadRequestMock): void {
	smaponeApiDownloadRequestMock = mock;
}

export function getSmaponeApiDownloadRequestMock(): SmaponeApiDownloadRequestMock {
	if (!smaponeApiDownloadRequestMock) {
		throw new Error('smaponeApiDownloadRequestMock is not initialized');
	}

	return smaponeApiDownloadRequestMock;
}
