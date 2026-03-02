## Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Maintain the formatting as much as you can. [Formatting section](#formatting)
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Formatting
General
- No manual obfuscation (gnioerbgoiwbrogiwrbogir)
- One liners - 60 characters limit. (applies to everything). Exceptions: URLs. [Character counter](https://wordcounter.net/character-count)
- Unnecessary framework usage that isn't already included won't be accepted
- 4 spaces per indent level. Exceptions: see [Prettier ignore](.prettierignore)

JavaScript
- Do not manually edit generated JavaScript files; modify the source (TypeScript) instead

Code comments
- Explanatory code comments aren't allowed
- General doesn't apply to code comments

### Get missing dependencies
- After cloning, install them by running the following:
```
npm install
```