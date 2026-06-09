import { executeSmapsNotification } from '../../../../nodes/Smapone/resources/intern/smapsNotification/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const smapId = 'smap/id';
const encodedSmapId = encodeURIComponent(smapId);

createExecuteTestSuite('smapsNotification', executeSmapsNotification, [
	{
		operation: 'getConfiguredWebhookInformation',
		method: 'GET',
		endpoint: `/intern/Smaps/${encodedSmapId}/Notification/Data/Webhook`,
		parameters: { smapId },
	},
	{
		operation: 'overwriteWebhookConfiguration',
		method: 'PUT',
		endpoint: `/intern/Smaps/${encodedSmapId}/Notification/Data/Webhook`,
		parameters: { smapId, body: { url: 'https://example.com/webhook' } },
		body: { url: 'https://example.com/webhook' },
	},
	{
		operation: 'removeWebhookConfiguration',
		method: 'DELETE',
		endpoint: `/intern/Smaps/${encodedSmapId}/Notification/Data/Webhook`,
		parameters: { smapId },
	},
]);
