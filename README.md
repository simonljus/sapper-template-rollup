# sapper-template

This is a fork of the [Sapper template for Rollup](https://github.com/sveltejs/sapper-template-rollup)


## Modifications
Added the following features:
* Sass support with [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess)
* [Storybook for Svelte](https://github.com/storybookjs/storybook/tree/master/app/svelte)
* [Svelte Material UI](https://github.com/hperrin/svelte-material-ui)
* [Svelte Flex](https://github.com/himynameisdave/svelte-flex)

Added an example of mat-flex and svelte-material-ui with a login form 
Added storybook functionality using [ this guide](https://dev.to/droidmakk/the-3s-svelte-sass-and-storybook-5h5n)
## Getting started


### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

```bash
npx degit "simonljus/sapper-template-rollup" my-app
```


### Using GitHub templates
[How to use Github templates](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
### Running the project

```bash
cd my-app
npm install
npm run dev
```
Open [localhost:3000](http://localhost:3000)

### Running Storybook

```bash
cd my-app
npm install
npm run storybook
```
Open [localhost:9001](http://localhost:9001)

