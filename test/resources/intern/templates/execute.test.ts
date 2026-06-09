import { executeTemplates } from '../../../../nodes/Smapone/resources/intern/templates/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

createExecuteTestSuite('templates', executeTemplates, [
	{
		operation: 'getAllAvailableCompanySmapTemplates',
		method: 'GET',
		endpoint: '/intern/Templates/CompanySmaps',
	},
	{
		operation: 'getAllAvailableAppIconTemplates',
		method: 'GET',
		endpoint: '/intern/Templates/Logos',
	},
	{
		operation: 'getAllAvailableSmapTemplates',
		method: 'GET',
		endpoint: '/intern/Templates/Smaps',
	},
]);
