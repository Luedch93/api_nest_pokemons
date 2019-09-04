import { Injectable } from '@nestjs/common';
import { PokemonModel } from './models/pokemon.model';
import { FavoriteModel } from './models/favorites.model';
import { FavoriteDTO } from './types/favorite.dto';

@Injectable()
export class AppService {
  async getPokemonDetail(name: string): Promise<any> {
    const pokemon = await PokemonModel.findOne({ name });
    return pokemon;
  }

  async getPokemons(): Promise<any[]> {
    const pokemons = await PokemonModel.find({});
    return pokemons;
  }

  getImagePath(name, typeImage) {
    const arrayPath = __dirname.split('\\');
    arrayPath.pop();
    return `${arrayPath.join('\\')}\\public\\images\\${name}\\${typeImage}.png`;
  }

  async saveFavorite(favorite: FavoriteDTO): Promise<any> {
    return await FavoriteModel.create(favorite);
  }
}
