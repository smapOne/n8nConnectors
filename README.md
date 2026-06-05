# n8n Connector for smapOne API

This is a repository for n8n connectors.
It contains an n8n community node. It lets you use the smapOne API in your n8n workflows.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The Connector contains all Endpoints for the following API routes:
* [smapOne API - internal scope](https://platform.smapone.com/swagger/index.html?urls.primaryName=intern)
* [smapOne API - preview scope](https://platform.smapone.com/swagger/index.html?urls.primaryName=preview)


## Credentials

All operations are authorized by an accessToken, that you can manage in your smapOne profile. This token is sent via Basic Access Authorization as password (Base64 encoding!).

## Compatibility

Tested with the following versions:
* "eslint": 9.32.0
* "prettier": 3.6.2
* "release-it": ^19.0.4
* "typescript": 5.9.2
* "n8": 2.19.5

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [smapOne API Swagger documentation](https://platform.smapone.com/swagger/index.html)