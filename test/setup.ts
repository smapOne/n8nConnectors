import { beforeEach, vi } from 'vitest';

import type { IDataObject } from 'n8n-workflow';

import { setSmaponeApiRequestMock } from './helpers/apiMockStore';

const smaponeApiRequestMock = vi.hoisted(() =>
	vi.fn<
		[
			method: string,
			endpoint: string,
			body?: IDataObject | string,
			qs?: IDataObject,
		],
		Promise<IDataObject | IDataObject[]>
	>(),
);

setSmaponeApiRequestMock(smaponeApiRequestMock);

vi.mock('../nodes/Smapone/GenericFunctions', () => ({
	smaponeApiRequest: smaponeApiRequestMock,
}));

beforeEach(() => {
	smaponeApiRequestMock.mockReset();
	smaponeApiRequestMock.mockResolvedValue({ success: true });
});
