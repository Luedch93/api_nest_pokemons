import { Test } from '@nestjs/testing';
import mongoose = require('mongoose');
import dotenv = require('dotenv');

import { AppService } from './app.service';
import { initTestDB, clearTestDB } from './utils/test.utils';
import { async } from 'rxjs/internal/scheduler/async';

dotenv.config();

describe('App Service', () => {
    let service: AppService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service = module.get<AppService>(AppService);
        await initTestDB();
        await mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
    });

    afterAll(async () => {
        await clearTestDB();
    });

    it('should get all pokemons', async () => {
        const pokemons = await service.getPokemons();
        expect(pokemons.length).toBeGreaterThanOrEqual(0);
    });

    it('should get a pokemon', async () => {
        const pokemon = await service.getPokemonDetail('testPokemon');
        expect(pokemon.name).toBe('testPokemon');
    });

    it('should create a favorite', async () => {
        const favorite = {
            name: 'test',
            pokemonId: '5d6e8b9ed3f0595b1c620c36',
        };
        let savedFavorite = await service.saveFavorite(favorite);
        expect(savedFavorite.name).toBe('test');
        expect(savedFavorite._id).toBeDefined();
    })

});
