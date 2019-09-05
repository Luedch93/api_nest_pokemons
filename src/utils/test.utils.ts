import mongoose = require('mongoose');
import dotenv = require('dotenv');

import { PokemonModel } from '../models/pokemon.model';
import { FavoriteModel } from '../models/favorites.model';

dotenv.config();

export function mockRequest(params): any {
  const req = {
    params,
  };
  return req;
}

export function mockResponse(): any {
  const res = {
    status(num) {
      return this;
    },
    sendFile(path) {
      return this;
    },
  };
  return res;
}

export async function initTestDB(): Promise<void> {
  await mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
  await mongoose.connection.dropDatabase();
  await PokemonModel.create({
    name: 'testPokemon',
    height: 1,
    weight: 1,
    sprites: {
      back_default: '',
      back_female: '',
      back_shiny: '',
      back_shiny_female: '',
      front_default: '',
      front_female: '',
      front_shiny: '',
      front_shiny_female: '',
    },
    stats: [
      {
        base_stat: 1,
        effort: 1,
        stat: {
          name: '',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: '',
        },
      },
    ],
  });
  await mongoose.disconnect();
}

export async function clearTestDB() {
  await mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
}
