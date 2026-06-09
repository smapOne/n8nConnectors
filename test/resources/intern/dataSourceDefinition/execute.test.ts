import { executeDataSourceDefinition } from '../../../../nodes/Smapone/resources/intern/dataSourceDefinition/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const dataSourceId = 'ds/id test';
const majorVersion = '1/0';
const dataSourceVersion = '1.0/1';
const encodedDataSourceId = encodeURIComponent(dataSourceId);
const encodedMajorVersion = encodeURIComponent(majorVersion);
const encodedDataSourceVersion = encodeURIComponent(dataSourceVersion);

createExecuteTestSuite('dataSourceDefinition', executeDataSourceDefinition, [
	{
		operation: 'retrieveLatestMinorVersionOfMajorVersionWithDataSourceDefinition',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/Major/${encodedMajorVersion}/Definition`,
		parameters: { dataSourceId, majorVersion },
	},
	{
		operation: 'loadDataSourceDefinitionForGivenVersion',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/${encodedDataSourceVersion}/Definition`,
		parameters: { dataSourceId, dataSourceVersion },
	},
	{
		operation: 'loadValuesOfDataSourceForGivenVersion',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/${encodedDataSourceVersion}/Definition/Values`,
		parameters: { dataSourceId, dataSourceVersion },
	},
	{
		operation: 'createNewVersionForYourDataSource',
		method: 'PUT',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/${encodedDataSourceVersion}/Definition/Values`,
		parameters: {
			dataSourceId,
			dataSourceVersion,
			body: { rows: [{ id: 1 }] },
		},
		body: { rows: [{ id: 1 }] },
	},
]);
