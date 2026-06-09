import { executeBricks } from '../../../../nodes/Smapone/resources/intern/bricks/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

createExecuteTestSuite('bricks', executeBricks, [
	{
		operation: 'getBricks',
		method: 'GET',
		endpoint: '/intern/Bricks',
	},
]);
