import { executeUserImport } from '../../../../nodes/Smapone/resources/intern/userImport/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

createExecuteTestSuite('userImport', executeUserImport, [
	{
		operation: 'getAllUsersByManagerSubscription',
		method: 'GET',
		endpoint: '/intern/UserImport',
	},
	{
		operation: 'createOrUpdateUsers',
		method: 'POST',
		endpoint: '/intern/UserImport',
		parameters: { body: { users: [{ email: 'user@example.com' }] } },
		body: { users: [{ email: 'user@example.com' }] },
	},
]);
