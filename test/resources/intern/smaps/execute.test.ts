import { executeSmaps } from '../../../../nodes/Smapone/resources/intern/smaps/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id test';
const encodedSmapId = encodeURIComponent(smapId);

createExecuteTestSuite('smaps', executeSmaps, [
	{
		operation: 'getAllUsersWithTokensForSpecificSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Users`,
		parameters: { smapId },
	},
	{
		operation: 'getAllSmapVersions',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/MajorVersions`,
		parameters: { smapId },
	},
	{
		operation: 'getListOfAllSmaps',
		method: 'GET',
		endpoint: '/intern/Smaps',
	},
	{
		operation: 'createEmptyAppOrCreateByTemplate',
		method: 'POST',
		endpoint: '/intern/Smaps',
		parameters: { body: { title: 'New Smap' } },
		body: { title: 'New Smap' },
	},
	{
		operation: 'getDetailsForSpecificSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}`,
		parameters: { smapId },
	},
	{
		operation: 'deleteSpecificSmapIncludingReferences',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}`,
		parameters: { smapId },
	},
]);
