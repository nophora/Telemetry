'use strict'

// All CLI flags
const FLAGS = {
  config: {
    string: true,
    describe: `Path to the configuration file.
Defaults to any net.toml in the git repository root directory or the base directory`,
  },
  defaultConfig: {
    string: true,
    describe: `JSON configuration object containing default values.
Each configuration default value is used unless overriden through the main configuration file.
Default: none.`,
    hidden: true,
  },
  cachedConfig: {
    string: true,
    describe: `JSON configuration object returned by @net/config.
This is done as a performance optimization to cache the configuration loading logic.
Default: none.`,
    hidden: true,
  },
  cwd: {
    string: true,
    describe: `Current directory. Used to retrieve the configuration file.
Default: current directory`,
  },
  repositoryRoot: {
    string: true,
    describe: `Git repository root directory. Used to retrieve the configuration file.
Default: automatically guessed`,
  },
  token: {
    string: true,
    describe: `Net API token for authentication.
The NET_AUTH_TOKEN environment variable can be used as well.`,
  },
  siteId: {
    string: true,
    describe: `Net Site ID.`,
  },
  deployId: {
    string: true,
    describe: `Net Deploy ID.
Default: automatically guessed`,
  },
  context: {
    string: true,
    describe: `Build context.
Default: 'production'`,
  },
  branch: {
    string: true,
    describe: `Repository branch.
Default: automatically guessed`,
  },
  framework: {
    string: true,
    describe: 'Front-end framework.',
    hidden: true,
  },
  baseRelDir: {
    boolean: true,
    describe: `Feature flag meant for backward compatibility.
When enabled, if the 'build.base' configuration property is defined, it is used
to try to retrieve a second configuration file and discard the first one.
Default: true`,
    hidden: true,
  },
  dry: {
    alias: 'dry-run',
    boolean: true,
    describe: `Run in dry mode, i.e. printing commands without executing them.
Default: false`,
  },
  nodePath: {
    string: true,
    describe: `Path to the Node.js binary to use in user commands and build plugins.
Default: Current Node.js binary`,
  },
  functionsDistDir: {
    string: true,
    describe: `Path to the directory where packaged functions are kept.
Default: automatically guessed`,
    hidden: true,
  },
  buildImagePluginsDir: {
    string: true,
    describe: `Path to the directory when build plugins are pre-installed.
Default: none`,
    hidden: true,
  },
  buildbotServerSocket: {
    string: true,
    describe: `Path to the buildbot server socket. This is used to connect to the buildbot to trigger deploys.`,
    hidden: true,
  },
  telemetry: {
    boolean: true,
    describe: `Enable telemetry.
Default: true`,
  },
  mode: {
    string: true,
    describe: `Environment in which this is loaded. Can be:
  - 'buildbot': within Net Buildbot
  - 'cli': within Net CLI
  - 'require': through require('@net/build')`,
    hidden: true,
  },
  debug: {
    boolean: true,
    describe: 'Print debugging information',
    hidden: true,
  },
  sendStatus: {
    boolean: true,
    describe: 'Whether plugin statuses should be sent to the Net API',
    hidden: true,
  },
  testOpts: {
    describe: 'Options for testing only',
    hidden: true,
  },
  featureFlags: {
    describe: 'Comma-separated list of feature flags to enable unreleased features',
    hidden: true,
  },
  statsd: {
    describe: 'Statsd-related options, for performance measuring',
    hidden: true,
  },
  'statsd.host': {
    type: 'string',
    describe: 'Statsd host',
    hidden: true,
  },
  'statsd.port': {
    type: 'number',
    describe: 'Statsd port',
    hidden: true,
  },
  buffer: {
    boolean: true,
    describe: 'Buffer output instead of printing it',
  },
}

module.exports = { FLAGS }
