## Description

A API project made with nestJs that work with a pokemon database

## Pre requisites

* Have [mongodb](https://www.mongodb.com/) installed in your machine
* Node v10.15
* NPM 6.4
* Yarn 1.15

You have to rename the file *sampleenvfile* to *.env* and you can change the url and the name of both the database and the test database.

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

## API

By default the app will run on port **3000** Here is the list of all the endpoints

### Pokemons

**Get all pokemons**
GET [http://localhost:3000/pokemons](http://localhost:3000/pokemons)

**Get one pokemon**
http://localhost:3000/pokemons/:nameOfPokemon
GET [http://localhost:3000/pokemons/pikachu](http://localhost:3000/pokemons/pikachu)

**Get image of pokemon**
http://localhost:3000/pokemons/:nameOfPokemon/:typeOfImage
You can use this types of image:
* back_default
* back_female
* back_shiny
* back_shiny_female
* front_default
* front_female
* front_shiny
* front_shiny_female
[http://localhost:3000/pokemons/mankey/front_default](http://localhost:3000/pokemons/mankey/front_default)

## Test

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
```
