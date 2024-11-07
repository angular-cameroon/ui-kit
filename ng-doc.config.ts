import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  docsPath: 'src/docs',
  routePrefix: 'docs',
  tsConfig: './tsconfig.app.json',
  cache: true,
  repoConfig: {
    url: 'https://github.com/angular-cameroon/ui-kit',
    mainBranch: 'master',
    releaseBranch: 'master',
  },
};

export default config;