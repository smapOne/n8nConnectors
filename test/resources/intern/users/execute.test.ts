import { executeUsers } from '../../../../nodes/Smapone/resources/intern/users/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const userId = 'user/id test';
const encodedUserId = encodeURIComponent(userId);

createExecuteTestSuite('users', executeUsers, [
	{
		operation: 'getAllUsers',
		method: 'GET',
		endpoint: '/intern/Users',
	},
	{
		operation: 'createOrUpdateUsers',
		method: 'POST',
		endpoint: '/intern/Users',
		parameters: { body: { users: [{ email: 'user@example.com' }] } },
		body: { users: [{ email: 'user@example.com' }] },
	},
	{
		operation: 'getUserDetails',
		method: 'GET',
		endpoint: `/intern/Users/${encodedUserId}`,
		parameters: { userId },
	},
	{
		operation: 'deleteSmapUser',
		method: 'DELETE',
		endpoint: `/intern/Users/${encodedUserId}`,
		parameters: { userId },
	},
	{
		operation: 'getAllGroupsUserIsPartOf',
		method: 'GET',
		endpoint: `/intern/Users/${encodedUserId}/memberOfGroups`,
		parameters: { userId },
	},
]);
