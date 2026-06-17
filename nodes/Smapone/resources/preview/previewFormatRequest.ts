import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	INodeExecutionData,
} from 'n8n-workflow';

import {
	buildSmaponeFileName,
	smaponeApiDownloadRequest,
	smaponeApiRequest,
} from '../../GenericFunctions';

const PREVIEW_TEXT_FORMATS: Record<string, string> = {
	Xml: 'application/xml',
	Html: 'text/html',
	Txt: 'text/plain',
};

const PREVIEW_DOWNLOAD_FORMATS: Record<string, { mimeType: string; extension: string }> = {
	Pdf: { mimeType: 'application/pdf', extension: 'pdf' },
	Doc: { mimeType: 'application/msword', extension: 'doc' },
	Docx: {
		mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		extension: 'docx',
	},
};

export async function smaponeApiPreviewFormatRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	format: string,
	fileNameBase: string,
	additionalQs: IDataObject = {},
): Promise<IDataObject | IDataObject[] | INodeExecutionData[]> {
	const qs: IDataObject = { ...additionalQs, format };
	const downloadFormat = PREVIEW_DOWNLOAD_FORMATS[format];

	if (downloadFormat) {
		return smaponeApiDownloadRequest.call(
			this,
			endpoint,
			buildSmaponeFileName(fileNameBase, downloadFormat.extension),
			downloadFormat.mimeType,
			qs,
		);
	}

	const textAccept = PREVIEW_TEXT_FORMATS[format];

	if (textAccept) {
		return smaponeApiRequest.call(
			this,
			method,
			endpoint,
			{},
			qs,
			{ responseFormat: 'text', accept: textAccept },
		);
	}

	return smaponeApiRequest.call(this, method, endpoint, {}, { ...additionalQs, format: 'Json' });
}
