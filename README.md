# n8n Node for smapOne API

This is a repository for n8n nodes.
It contains an n8n community node. It lets you use the smapOne API in your n8n workflows.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This Node contains all relevant Endpoints for the following API routes:
* [smapOne API - internal scope](https://platform.smapone.com/swagger/index.html?urls.primaryName=intern)
* [smapOne API - preview scope](https://platform.smapone.com/swagger/index.html?urls.primaryName=preview)

This node targets the smapOne cloud API at platform.smapone.com.

## Credentials

This node uses the **smapOne API** credential.

To authenticate, use the **API Token** in your smapOne profile and enter it in the credential configuration within n8n.

The API token is sent as the password using HTTP Basic Authentication. The username field is required by the protocol but is ignored by the smapOne API, so you can enter any value.

All requests made by this node are authenticated automatically using the configured credential.

For further details about authentication and available endpoints, see the [smapOne API documentation](https://platform.smapone.com/swagger/index.html?urls.primaryName=intern).


## Compatibility

Tested with:

* **n8n** 2.19.5
* **n8n-workflow** ^2.16.0

## Support

If you find an issue or bug with this node, please contact smapOne at [support@smapone.com](mailto:support@smapone.com).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [smapOne API Swagger documentation](https://platform.smapone.com/swagger/index.html)