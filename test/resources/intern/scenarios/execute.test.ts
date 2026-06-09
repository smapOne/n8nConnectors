import { executeScenarios } from '../../../../nodes/Smapone/resources/intern/scenarios/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const language = 'de/DE';

createExecuteTestSuite('scenarios', executeScenarios, [
	{
		operation: 'loadListOfCompanyScenarios',
		method: 'GET',
		endpoint: '/intern/Scenarios/company',
	},
	{
		operation: 'loadListOfCustomScenarios',
		method: 'GET',
		endpoint: '/intern/Scenarios/custom',
	},
	{
		operation: 'loadListOfPredefinedScenariosByLanguage',
		method: 'GET',
		endpoint: `/intern/Scenarios/predefined/${encodeURIComponent(language)}`,
		parameters: { language },
	},
]);
