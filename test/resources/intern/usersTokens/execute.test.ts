import { executeUsersTokens } from '../../../../nodes/Smapone/resources/intern/usersTokens/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const userId = 'user/id';
const tokenId = 'token/id';
const encodedUserId = encodeURIComponent(userId);
const encodedTokenId = encodeURIComponent(tokenId);

createExecuteTestSuite('usersTokens', executeUsersTokens, [
	{
		operation: 'getUserDetails',
		method: 'GET',
		endpoint: `/intern/Users/${encodedUserId}/Tokens`,
		parameters: { userId },
	},
	{
		operation: 'wipeAllUserTokens',
		method: 'DELETE',
		endpoint: `/intern/Users/${encodedUserId}/Tokens`,
		parameters: { userId },
	},
	{
		operation: 'generateQrCodeForGivenSmap',
		method: 'GET',
		endpoint: `/intern/Users/${encodedUserId}/Tokens/${encodedTokenId}/QrCode`,
		parameters: { userId, tokenId },
	},
]);
