import { Test } from '@nestjs/testing';

import { PokemonsController } from './pokemons.controller';
import { AppService } from '../app.service';
import { mockRequest, mockResponse } from '../utils/test.utils';
import { FavoriteDTO } from 'src/types/favorite.dto';
import { resolve } from 'dns';

describe('Pokemons Controller', () => {
  let controller: PokemonsController;
  let service: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
    controller = module.get<PokemonsController>(PokemonsController);
  });

  it('should be defined', (done) => {
    expect(controller).toBeDefined();
    done();
  });

  it('should return an array of pokemons', async (done) => {
    const result = new Promise<any[]>((resolve, reject) => {
      resolve([{ name: 'pikachu' }, { name: 'raichu' }]);
    });
    jest.spyOn(service, 'getPokemons').mockImplementation(() => result);

    expect(await controller.getPokemons()).toBe(await result);
    done();
  });

  it('should return a pokemon object', async (done) => {
    const pokemon = new Promise<any>((resolve, reject) => {
      resolve({ name: 'meowth' });
    });
    jest.spyOn(service, 'getPokemonDetail').mockImplementation(() => pokemon);

    expect(await controller.getPokemon('mewoth')).toBe(await pokemon);
    done();
  });

  it('should return a image', (done) => {
    const pokemon = 'charmander';
    const imageType = 'front_default';

    const result = controller.getImage(
      mockResponse(),
      mockRequest({ pokemon, imageType }),
    );
    expect(result).toBe(undefined);
    done();
  });

  it('should save a favorite', async () => {
    const newFavorite = new Promise<FavoriteDTO>((resolve, reject) => {
      resolve({
        name: 'test',
        pokemonId: '123456789',
      });
    });
    jest.spyOn(service, 'saveFavorite').mockImplementation(() => newFavorite);

    const favorite: FavoriteDTO = {
      name: 'test',
      pokemonId: '123456789',
    };

    expect(await controller.addFavorites(favorite)).toBe(await newFavorite);
  });
});
