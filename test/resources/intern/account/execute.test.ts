import { executeAccount } from '../../../../nodes/Smapone/resources/intern/account/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const encodedKey = encodeURIComponent('setting/key');

createExecuteTestSuite('account', executeAccount, [
	{
		operation: 'getAccount',
		method: 'GET',
		endpoint: '/intern/Account',
	},
	{
		operation: 'getHasSubscriptionAccessGrants',
		method: 'GET',
		endpoint: '/intern/Account/GetHasSubscriptionAccessGrants',
	},
	{
		operation: 'getSettings',
		method: 'GET',
		endpoint: '/intern/Account/Settings',
	},
	{
		operation: 'getSetting',
		method: 'GET',
		endpoint: `/intern/Account/Settings/${encodedKey}`,
		parameters: { key: 'setting/key' },
	},
	{
		operation: 'getStats',
		method: 'GET',
		endpoint: '/intern/Account/Stats',
	},
	{
		operation: 'updateSetting',
		method: 'PUT',
		endpoint: `/intern/Account/Settings/${encodedKey}`,
		parameters: { key: 'setting/key', value: 'enabled' },
		body: { value: 'enabled' },
	},
	{
		operation: 'deleteSetting',
		method: 'DELETE',
		endpoint: `/intern/Account/Settings/${encodedKey}`,
		parameters: { key: 'setting/key' },
	},
]);
