import { executeSmapsDefinition } from '../../../../nodes/Smapone/resources/intern/smapsDefinition/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const version = '1.0/1';
const encodedSmapId = encodeURIComponent(smapId);
const encodedVersion = encodeURIComponent(version);

createExecuteTestSuite('smapsDefinition', executeSmapsDefinition, [
	{
		operation: 'loadDefinitionForSmap',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Definition`,
		parameters: { smapId, version },
	},
	{
		operation: 'overwriteDefinitionOfGivenSmap',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/0.0/Definition`,
		parameters: { smapId, body: { fields: [] }, revision: 3 },
		body: { fields: [] },
		qs: { revision: 3 },
	},
	{
		operation: 'validateDefinitionOfGivenSmap',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/0.0/Definition/Validate`,
		parameters: { smapId, body: { fields: [] }, skipTemplate: true },
		body: { fields: [] },
		qs: { skipTemplate: true },
	},
]);
