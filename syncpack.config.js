/** @type {import("syncpack").RcFile} */
const config = {
  customTypes: {
    dev: {
      strategy: 'versionsByName',
      path: 'devDependencies',
    },
    local: {
      strategy: 'name~version',
      namePath: 'name',
      path: 'version',
    },
    overrides: {
      strategy: 'versionsByName',
      path: 'overrides',
    },
    peer: {
      strategy: 'versionsByName',
      path: 'peerDependencies',
    },
    pnpmOverrides: {
      strategy: 'versionsByName',
      path: 'pnpm.overrides',
    },
    prod: {
      strategy: 'versionsByName',
      path: 'dependencies',
    },
    resolutions: {
      strategy: 'versionsByName',
      path: 'resolutions',
    },
  },
  formatBugs: true,
  formatRepository: true,
  indent: '  ',
  semverGroups: [],
  sortAz: ['bin', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions', 'scripts'],
  sortExports: ['types', 'node-addons', 'node', 'browser', 'import', 'require', 'development', 'production', 'default'],
  sortFirst: ['name', 'description', 'version', 'author'],
  sortPackages: true,
  source: ['packages/**/package.json', 'apps/**/package.json'],
  versionGroups: [
    {
      dependencies: ["@lumartinez/lint", "@lumartinez/tsconfig", "@lumartinez/components"],
      dependencyTypes: ["dev", "prod"],
      pinVersion: "workspace:*",
    },
  ]
};

module.exports = config;