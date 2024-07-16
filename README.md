# AgePartnership Stylelint Config

StyleLint Configuration for AgePartnership's SCSS. Requires Node.js >= 18.12.0.

## Publishing Changes
We use [`npm version`](https://docs.npmjs.com/cli/v6/commands/npm-version) with some custom commit hooks in `package.json` to handle updating our package version, creating our Git release and tag, and pushing the changes to Github. There's no need to do a `git flow release`, to manually update the package version in package.json, or to manually merge your code into master and push your tags.

Here's the process for publishing your changes:
1. Merge your approved changes into develop and pull down develop locally.
2. Run `npm version [patch / minor / major]`, following normal [semantic versioning constraints](https://semver.org/).
3. Run `npm publish` to push your changes up to the registry

### How to use:
`npm install @agepartnersip/ap-stylelint-config --save-dev`

#### Set up .stylelintrc.yaml
This file should go in the route of your repo

Note: `node_modules` is excluded by default – https://stylelint.io/user-guide/configure/#ignorefiles

```yaml
extends: "@agepartnership/ap-stylelint-config"

ignoreFiles:
  - some-folder/some-temp-file.scss
  - "**/*.yaml"
  - "**/*.yml"
  - "**/*.css"

```
See https://stylelint.io/user-guide/configure/ for more info
