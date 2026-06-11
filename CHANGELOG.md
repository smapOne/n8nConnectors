# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-06-11

First public release. Earlier `0.1.x` versions in `package.json` were used during development and were not published to npm.

### Added

- **Smapone** community node for the smapOne cloud API at `platform.smapone.com`.
- **Smapone API** credential using HTTP Basic Authentication (username and password).
- **Intern API scope** covering account, bricks, corporation management, data sources, export templates, groups, helper utilities, scenarios, smaps (and related sub-resources), subscriptions, templates, user import, and users.
- **Preview API scope** for preview smaps, smaps records, and smaps tasks (preview operations are labeled with a `[Preview]` prefix in the node UI).
- Light and dark node icons.
- Unit tests for resource execute handlers.
- CI workflow running lint, unit tests, and build on push and pull requests.
- GitHub Actions publish workflow with npm provenance support.
- Documentation links in node codex metadata and README (installation, credentials, Swagger references).
- Strict n8n Cloud linting enabled for community node eligibility.

[Unreleased]: https://github.com/smapOne/n8nConnectors/compare/1.0.0...HEAD
[1.0.0]: https://github.com/smapOne/n8nConnectors/releases/tag/1.0.0
