import { executeDataSourceVersion } from '../../../../nodes/Smapone/resources/intern/dataSourceVersion/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const dataSourceId = 'ds/id test';
const dataSourceVersion = '1.0/1';
const majorVersion = '1/0';
const encodedDataSourceId = encodeURIComponent(dataSourceId);
const encodedDataSourceVersion = encodeURIComponent(dataSourceVersion);
const encodedMajorVersion = encodeURIComponent(majorVersion);

createExecuteTestSuite('dataSourceVersion', executeDataSourceVersion, [
	{
		operation: 'retrieveListOfVersionsOfSpecificDataSource',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions`,
		parameters: { dataSourceId },
	},
	{
		operation: 'updateStaticTableInStructureAndData',
		method: 'POST',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions`,
		parameters: { dataSourceId, body: { columns: [] } },
		body: { columns: [] },
	},
	{
		operation: 'retrieveSpecificVersionOfDataSource',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/${encodedDataSourceVersion}`,
		parameters: { dataSourceId, dataSourceVersion },
	},
	{
		operation: 'retrieveLatestMinorVersionOfMajorVersionWithDefinitionAndDataRows',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedDataSourceId}/Versions/${encodedMajorVersion}/Values`,
		parameters: { dataSourceId, majorVersion },
	},
]);
