## Description

A API project made with nestJs that work with a pokemon database

## Pre requisites

* Have [mongodb](https://www.mongodb.com/) installed in your machine
* Node v10.15
* NPM 6.4
* Yarn 1.15

## Installation

```bash
$ yarn install
```

## Migration

First you have to run the migration script, be sure that your mongo server is running

```bash
# create the database
$ yarn migrate
```

This command will create a database called *pokemondb* in your mongo server

## Running the app
```bash
# build the app
$ yarn build

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# test coverage
$ npm run test:cov
```
