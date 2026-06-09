import { executeDataSource } from '../../../../nodes/Smapone/resources/intern/dataSource/execute';
import { createExecuteTestSuite } from '../../../helpers/executeTestSuite';

const encodedId = encodeURIComponent('ds/id test');

createExecuteTestSuite('dataSource', executeDataSource, [
	{
		operation: 'createNewDatasourceOfTypeStaticTable',
		method: 'POST',
		endpoint: '/intern/DataSource',
		parameters: { body: { title: 'Static Table', columns: [] } },
		body: { title: 'Static Table', columns: [] },
	},
	{
		operation: 'deleteDatasourceIncludingAllSourceVersions',
		method: 'DELETE',
		endpoint: `/intern/DataSource/${encodedId}`,
		parameters: { dataSourceId: 'ds/id test' },
	},
	{
		operation: 'getDataSourceWithMetaInformation',
		method: 'GET',
		endpoint: `/intern/DataSource/${encodedId}`,
		parameters: { dataSourceId: 'ds/id test' },
	},
	{
		operation: 'getListWithMetaInformationOfAvailableDatasource',
		method: 'GET',
		endpoint: '/intern/DataSource',
	},
	{
		operation: 'updateTitleOfDataSource',
		method: 'PUT',
		endpoint: `/intern/DataSource/${encodedId}/title`,
		parameters: { dataSourceId: 'ds/id test', title: 'New Title' },
		body: 'New Title',
	},
]);
