import type {
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	INodeExecutionData,
	IDataObject,
	JsonObject,
} from 'n8n-workflow';

import { NodeApiError } from 'n8n-workflow';

export type SmaponeApiRequestOptions = {
	responseFormat?: 'json' | 'text';
	accept?: string;
};

export async function smaponeApiRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | string = {},
	qs: IDataObject = {},
	requestOptions: SmaponeApiRequestOptions = {},
): Promise<IDataObject | IDataObject[]> {
	const responseFormat = requestOptions.responseFormat ?? 'json';

    	const options: IHttpRequestOptions = {
		method,
		url: `https://platform.smapone.com/Backend${endpoint}`,
		headers: {
			Accept:
				requestOptions.accept ??
				(responseFormat === 'json' ? 'application/json' : 'application/xml'),
			'Content-Type': 'application/json',
		},
	};

	if (responseFormat === 'json') {
		options.json = true;
	}

	if (typeof body === 'string' || Object.keys(body).length > 0) {
		options.body = body;
	}

	if (Object.keys(qs).length) {
		options.qs = qs;
	}

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'smaponeApi',
			options,
		);

		if (responseFormat === 'text') {
			return { data: response as string };
		}

		return response as IDataObject | IDataObject[];
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function smaponeApiDownloadRequest(
	this: IExecuteFunctions,
	endpoint: string,
	fileName: string,
	mimeType: string,
	qs: IDataObject = {},
): Promise<INodeExecutionData[]> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `https://platform.smapone.com/Backend${endpoint}`,
		encoding: 'arraybuffer',
		returnFullResponse: true,
	};

	if (Object.keys(qs).length > 0) {
		options.qs = qs;
	}

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'smaponeApi',
			options,
		);

		const binaryData = await this.helpers.prepareBinaryData(
			Buffer.from(response.body as ArrayBuffer),
			fileName,
			mimeType,
		);

		return [
			{
				json: {
					fileName,
					mimeType,
				},
				binary: {
					data: binaryData,
				},
			},
		];
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export function buildSmaponeFileName(smapName: string, extension: string): string {
	const now = new Date();

	const yyyy = now.getFullYear();
	const MM = String(now.getMonth() + 1).padStart(2, '0');
	const dd = String(now.getDate()).padStart(2, '0');
	const hh = String(now.getHours()).padStart(2, '0');
	const mm = String(now.getMinutes()).padStart(2, '0');
	const ss = String(now.getSeconds()).padStart(2, '0');

	const safeSmapName = smapName
		.trim()
		.split('')
		.map((char) => {
			const code = char.charCodeAt(0);
			if (code < 32 || /[<>:"/\\|?*]/.test(char)) {
				return '_';
			}

			return char;
		})
		.join('')
		.replace(/\s+/g, '_');

	return `${safeSmapName}_${yyyy}_${MM}_${dd}_${hh}_${mm}_${ss}.${extension}`;
}

export function buildSmaponeExportFileName(smapName: string): string {
	return buildSmaponeFileName(smapName, 'zip');
}

export function isBinaryExecutionData(
	result: IDataObject | IDataObject[] | INodeExecutionData[],
): result is INodeExecutionData[] {
	return Array.isArray(result) && result.length > 0 && 'binary' in result[0];
}
