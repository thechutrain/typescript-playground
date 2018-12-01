# Typescript-Node

> Typescript + Node boilerplate for easy deployment to heroku

## Get up and running

```
$ yarn install
$ yarn run dev
```

## Features

- Typescript
- TSLint + Prettier

## Deploying to Heroku

TODO

## VS Code

### JavaScript + ESLint

```
{
	"editor.formatOnSave": true,
	"eslint.enable": false,
	"eslint.packageManager": "yarn",

}
```

### Typescript + TSLint setting

Make sure you have the TSLint extension downloaded and enabled.

```
	{
	"editor.formatOnSave": true,
	"tslint.configFile": "tslint.js",
	"tslint.packageManager": "yarn",
	"tslint.nodePath": "./node_modules/.bin/tslint/"
}

```
