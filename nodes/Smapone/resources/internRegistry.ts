import { accountDescription } from './intern/account/description';
import { executeAccount } from './intern/account/execute';
import { bricksDescription } from './intern/bricks/description';
import { executeBricks } from './intern/bricks/execute';
import { bricksDefinitionDescription } from './intern/bricksDefinition/description';
import { executeBricksDefinition } from './intern/bricksDefinition/execute';
import { dataSourceDescription } from './intern/dataSource/description';
import { executeDataSource } from './intern/dataSource/execute';
import { dataSourceDefinitionDescription } from './intern/dataSourceDefinition/description';
import { executeDataSourceDefinition } from './intern/dataSourceDefinition/execute';
import { dataSourceVersionDescription } from './intern/dataSourceVersion/description';
import { executeDataSourceVersion } from './intern/dataSourceVersion/execute';
import { groupsDescription } from './intern/groups/description';
import { executeGroups } from './intern/groups/execute';
import { helperDescription } from './intern/helper/description';
import { executeHelper } from './intern/helper/execute';
import { scenariosDescription } from './intern/scenarios/description';
import { executeScenarios } from './intern/scenarios/execute';
import { smapsDescription } from './intern/smaps/description';
import { executeSmaps } from './intern/smaps/execute';
import { smapsDataDescription } from './intern/smapsData/description';
import { executeSmapsData } from './intern/smapsData/execute';
import { smapsDefinitionDescription } from './intern/smapsDefinition/description';
import { executeSmapsDefinition } from './intern/smapsDefinition/execute';
import { smapsNotificationDescription } from './intern/smapsNotification/description';
import { executeSmapsNotification } from './intern/smapsNotification/execute';
import { smapsTasksDescription } from './intern/smapsTasks/description';
import { executeSmapsTasks } from './intern/smapsTasks/execute';
import { smapsVersionsDescription } from './intern/smapsVersions/description';
import { executeSmapsVersions } from './intern/smapsVersions/execute';
import { templatesDescription } from './intern/templates/description';
import { executeTemplates } from './intern/templates/execute';
import { userImportDescription } from './intern/userImport/description';
import { executeUserImport } from './intern/userImport/execute';
import { usersDescription } from './intern/users/description';
import { executeUsers } from './intern/users/execute';
import { usersTokensDescription } from './intern/usersTokens/description';
import { executeUsersTokens } from './intern/usersTokens/execute';
import type { ResourceDefinition } from './types';

export const internResources: ResourceDefinition[] = [
	{
		displayName: 'Account',
		value: 'account',
		description: accountDescription,
		execute: executeAccount,
	},
	{
		displayName: 'Bricks',
		value: 'bricks',
		description: bricksDescription,
		execute: executeBricks,
	},
	{
		displayName: 'BricksDefinition',
		value: 'bricksDefinition',
		description: bricksDefinitionDescription,
		execute: executeBricksDefinition,
	},
	{
		displayName: 'DataSource',
		value: 'dataSource',
		description: dataSourceDescription,
		execute: executeDataSource,
	},
	{
		displayName: 'DataSourceDefinition',
		value: 'dataSourceDefinition',
		description: dataSourceDefinitionDescription,
		execute: executeDataSourceDefinition,
	},
	{
		displayName: 'DataSourceVersion',
		value: 'dataSourceVersion',
		description: dataSourceVersionDescription,
		execute: executeDataSourceVersion,
	},
	{
		displayName: 'Groups',
		value: 'groups',
		description: groupsDescription,
		execute: executeGroups,
	},
	{
		displayName: 'Helper',
		value: 'helper',
		description: helperDescription,
		execute: executeHelper,
	},
	{
		displayName: 'Scenarios',
		value: 'scenarios',
		description: scenariosDescription,
		execute: executeScenarios,
	},
	{
		displayName: 'Smaps',
		value: 'smaps',
		description: smapsDescription,
		execute: executeSmaps,
	},
	{
		displayName: 'SmapsData',
		value: 'smapsData',
		description: smapsDataDescription,
		execute: executeSmapsData,
	},
	{
		displayName: 'SmapsDefinition',
		value: 'smapsDefinition',
		description: smapsDefinitionDescription,
		execute: executeSmapsDefinition,
	},
	{
		displayName: 'SmapsNotification',
		value: 'smapsNotification',
		description: smapsNotificationDescription,
		execute: executeSmapsNotification,
	},
	{
		displayName: 'SmapsTasks',
		value: 'smapsTasks',
		description: smapsTasksDescription,
		execute: executeSmapsTasks,
	},
	{
		displayName: 'SmapsVersions',
		value: 'smapsVersions',
		description: smapsVersionsDescription,
		execute: executeSmapsVersions,
	},
	{
		displayName: 'Templates',
		value: 'templates',
		description: templatesDescription,
		execute: executeTemplates,
	},
	{
		displayName: 'UserImport',
		value: 'userImport',
		description: userImportDescription,
		execute: executeUserImport,
	},
	{
		displayName: 'Users',
		value: 'users',
		description: usersDescription,
		execute: executeUsers,
	},
	{
		displayName: 'UsersTokens',
		value: 'usersTokens',
		description: usersTokensDescription,
		execute: executeUsersTokens,
	},
];
