import type { IDataObject } from 'n8n-workflow';

export type SmaponeApiRequestCall = [
	method: string,
	endpoint: string,
	body?: IDataObject | string,
	qs?: IDataObject,
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

let smaponeApiRequestMock: SmaponeApiRequestMock | undefined;

export function setSmaponeApiRequestMock(mock: SmaponeApiRequestMock): void {
	smaponeApiRequestMock = mock;
}

export function getSmaponeApiRequestMock(): SmaponeApiRequestMock {
	if (!smaponeApiRequestMock) {
		throw new Error('smaponeApiRequestMock is not initialized');
	}

	return smaponeApiRequestMock;
}
