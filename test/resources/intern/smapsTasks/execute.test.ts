import { executeSmapsTasks } from '../../../../nodes/Smapone/resources/intern/smapsTasks/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const version = '1.0/1';
const taskId = 'task/id';
const encodedSmapId = encodeURIComponent(smapId);
const encodedVersion = encodeURIComponent(version);
const encodedTaskId = encodeURIComponent(taskId);

createExecuteTestSuite('smapsTasks', executeSmapsTasks, [
	{
		operation: 'changeStateOfTaskAndAssignTaskToUser',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/Versions/${encodedVersion}/Tasks/${encodedTaskId}/State`,
		parameters: {
			smapId,
			version,
			taskId,
			body: { state: 'open', userId: 'user-1' },
		},
		body: { state: 'open', userId: 'user-1' },
	},
]);
