import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SmaponeApi implements ICredentialType {
	name = 'smaponeApi';
	displayName = 'Smapone API';
	documentationUrl = "https://platform.smapone.com/swagger/index.html";
	icon: Icon = { 
		light: 'file:../nodes/Smapone/icons/smapone.svg', 
		dark: 'file:../nodes/Smapone/icons/smapone.dark.svg'
	}

	properties: INodeProperties[] = [
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.username}}',
				password: '={{$credentials.password}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://platform.smapone.com/Backend',
			url: '/v1/Smaps',
		},
	};
}
