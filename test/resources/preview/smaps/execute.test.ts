import { executePreviewSmaps } from '../../../../nodes/Smapone/resources/preview/smaps/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id test';
const encodedSmapId = encodeURIComponent(smapId);

createExecuteTestSuite('previewSmaps', executePreviewSmaps, [
	{
		operation: 'getODataDefinitionForSmapVersions',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Odata`,
		parameters: { smapId },
	},
	{
		operation: 'provideODataEdmSchemaDefinition',
		method: 'GET',
		endpoint: `/preview/Smaps/${encodedSmapId}/Odata/$metadata`,
		parameters: { smapId },
	},
]);
