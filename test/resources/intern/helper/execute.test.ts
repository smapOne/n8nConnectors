import { executeHelper } from '../../../../nodes/Smapone/resources/intern/helper/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

createExecuteTestSuite('helper', executeHelper, [
	{
		operation: 'matchGivenExamplesAgainstRegularExpression',
		method: 'POST',
		endpoint: '/intern/Helper/ValidateRegex',
		parameters: { body: { regex: '^[a-z]+$', examples: ['abc'] } },
		body: { regex: '^[a-z]+$', examples: ['abc'] },
	},
]);
