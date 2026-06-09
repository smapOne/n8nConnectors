import type { Mock } from 'vitest';

import type { IDataObject } from 'n8n-workflow';

export type SmaponeApiRequestMock = Mock<
	[
		method: string,
		endpoint: string,
		body?: IDataObject | string,
		qs?: IDataObject,
	],
	Promise<IDataObject | IDataObject[]>
>;

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
