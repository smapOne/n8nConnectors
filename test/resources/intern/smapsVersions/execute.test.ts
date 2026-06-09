import { executeSmapsVersions } from '../../../../nodes/Smapone/resources/intern/smapsVersions/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const version = '1.0/1';
const encodedSmapId = encodeURIComponent(smapId);
const encodedVersion = encodeURIComponent(version);

createExecuteTestSuite('smapsVersions', executeSmapsVersions, [
	{
		operation: 'getAllSmapVersions',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions`,
		parameters: { smapId },
	},
	{
		operation: 'publishSmap',
		method: 'POST',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions`,
		parameters: { smapId, body: { comment: 'Release' } },
		body: { comment: 'Release' },
	},
	{
		operation: 'getSpecificSmapVersion',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}`,
		parameters: { smapId, version },
	},
	{
		operation: 'deleteCertainVersionOfSmap',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}`,
		parameters: { smapId, version },
	},
	{
		operation: 'loadSchemaForDataRecord',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Schema`,
		parameters: { smapId, version },
	},
	{
		operation: 'updateAllDataSourcesToLatestMinorVersion',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/Current/DataSources/Update`,
		parameters: { smapId, updateEditVersion: true },
		emptyBody: true,
		qs: { updateEditVersion: true },
	},
]);
