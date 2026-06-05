import type {
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IDataObject,
	JsonObject,
} from 'n8n-workflow';

import { NodeApiError } from 'n8n-workflow';

export async function smaponeApiRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | string = {},
	qs: IDataObject = {},
): Promise<IDataObject | IDataObject[]> {
    	const options: IHttpRequestOptions = {
		method,
		url: `https://platform.smapone.com/Backend${endpoint}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		json: true,
	};

	if (typeof body === 'string' || Object.keys(body).length > 0) {
		options.body = body;
	}

	if (Object.keys(qs).length) {
		options.qs = qs;
	}

	try {
		/*console.log('================ REQUEST ================');
		console.log('Method:', method);
		console.log('URL:', options.url);

		if (options.qs) {
			console.log('Query:', JSON.stringify(options.qs, null, 2));
		}

		if (options.body) {
			console.log('Body:', JSON.stringify(options.body, null, 2));
		}

		console.log('========================================');*/

		return await this.helpers.httpRequestWithAuthentication.call(
			this,
			'smaponeApi',
			options,
		);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}