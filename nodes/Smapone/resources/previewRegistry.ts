import { previewSmapsDescription } from './preview/smaps/description';
import { executePreviewSmaps } from './preview/smaps/execute';
import { previewSmapsRecordsDescription } from './preview/smapsRecords/description';
import { executePreviewSmapsRecords } from './preview/smapsRecords/execute';
import { previewSmapsTasksDescription } from './preview/smapsTasks/description';
import { executePreviewSmapsTasks } from './preview/smapsTasks/execute';
import type { ResourceDefinition } from './types';

export const previewResources: ResourceDefinition[] = [
	{
		displayName: '[Preview] Smaps',
		value: 'previewSmaps',
		description: previewSmapsDescription,
		execute: executePreviewSmaps,
	},
	{
		displayName: '[Preview] SmapsRecords',
		value: 'previewSmapsRecords',
		description: previewSmapsRecordsDescription,
		execute: executePreviewSmapsRecords,
	},
	{
		displayName: '[Preview] SmapsTasks',
		value: 'previewSmapsTasks',
		description: previewSmapsTasksDescription,
		execute: executePreviewSmapsTasks,
	},
];
