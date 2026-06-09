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

This node uses the **Smapone API** credential with HTTP Basic Authentication:

* **Username** — your smapOne username
* **Password** — your smapOne password

n8n sends these credentials as Basic Auth on each request. Further API details are in the [smapOne intern API documentation](https://platform.smapone.com/swagger/index.html?urls.primaryName=intern).

## Compatibility

Tested with:

* **n8n** 2.19.5
* **n8n-workflow** ^2.16.0

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [smapOne API Swagger documentation](https://platform.smapone.com/swagger/index.html)