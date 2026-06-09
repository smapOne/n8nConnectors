import { executeGroups } from '../../../../nodes/Smapone/resources/intern/groups/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const groupId = 'group/id';
const userId = 'user/id';
const smapId = 'smap/id';
const encodedGroupId = encodeURIComponent(groupId);
const encodedUserId = encodeURIComponent(userId);
const encodedSmapId = encodeURIComponent(smapId);

createExecuteTestSuite('groups', executeGroups, [
	{
		operation: 'getAllGroups',
		method: 'GET',
		endpoint: '/intern/Groups',
	},
	{
		operation: 'createEmptyGroup',
		method: 'POST',
		endpoint: '/intern/Groups',
		parameters: { body: { name: 'New Group' } },
		body: { name: 'New Group' },
	},
	{
		operation: 'getDetailsOfGroupWithMembers',
		method: 'GET',
		endpoint: `/intern/Groups/${encodedGroupId}`,
		parameters: { groupId },
	},
	{
		operation: 'editGroup',
		method: 'PUT',
		endpoint: `/intern/Groups/${encodedGroupId}`,
		parameters: { groupId, body: { name: 'Updated Group' } },
		body: { name: 'Updated Group' },
	},
	{
		operation: 'deleteGroup',
		method: 'DELETE',
		endpoint: `/intern/Groups/${encodedGroupId}`,
		parameters: { groupId },
	},
	{
		operation: 'editGroupComment',
		method: 'PATCH',
		endpoint: `/intern/Groups/${encodedGroupId}/comment`,
		parameters: { groupId, body: 'Updated comment' },
		body: { body: 'Updated comment' },
	},
	{
		operation: 'addUserToGroup',
		method: 'PUT',
		endpoint: `/intern/Groups/${encodedGroupId}/Users/${encodedUserId}`,
		parameters: { groupId, userId },
	},
	{
		operation: 'removeUserFromGroupAndAssignedSmaps',
		method: 'DELETE',
		endpoint: `/intern/Groups/${encodedGroupId}/Users/${encodedUserId}`,
		parameters: { groupId, userId },
	},
	{
		operation: 'addSmapToGroup',
		method: 'PUT',
		endpoint: `/intern/Groups/${encodedGroupId}/Smaps/${encodedSmapId}`,
		parameters: { groupId, smapId },
	},
	{
		operation: 'deleteSmapFromGroup',
		method: 'DELETE',
		endpoint: `/intern/Groups/${encodedGroupId}/Smaps/${encodedSmapId}`,
		parameters: { groupId, smapId },
	},
]);
