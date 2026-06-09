import { executeBricksDefinition } from '../../../../nodes/Smapone/resources/intern/bricksDefinition/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

createExecuteTestSuite('bricksDefinition', executeBricksDefinition, [
	{
		operation: 'getBricksDefinition',
		method: 'GET',
		endpoint: '/intern/Bricks/Definition',
	},
]);
