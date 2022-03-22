module.exports = {
  platform: 'gitlab',
  endpoint: '<PRIVATE INSTANCE>',
  token: process.env.RENOVATE_TOKEN,
  assignees: [
    '@loadi-dev',
  ],
  repositories: [
     { repository: 'loadi-dev/renovate-bumpversion-demo', bumpVersion: 'patch'},
  ],
  logLevel: 'info',
  
  assignAutomerge: true,
  requireConfig: false,
  onboarding: false,
  fetchReleaseNotes: false,
  platformAutomerge :true,
  
  enabledManagers: [
     'maven'
  ],
  patch: {
  "automerge": true
  },
  packageRules: [
    {
      "matchUpdateTypes": ["patch"],
      "matchCurrentVersion": "!/^0/",
      "automerge": true
    }
  ],

};
