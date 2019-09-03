import fs = require('fs');
import { Pokemon, IPokemon } from '../models/pokemon.model';
import {getPokemonDetail, saveImage} from '../network/requests';

export async function deletePokemons() {
    await Pokemon.deleteMany({});
}

export async function insertPokemons(results: any[], saveImagesFlag = false) {
    const pokemonArray: IPokemon[] = [];
    for (const p of results) {
        const {
            name,
            sprites,
            height,
            weight,
            stats,
            types} = await getPokemonDetail(p.name);
        console.log('Catched pokemon', name);
        pokemonArray.push({name, sprites, height, weight, stats, types});
        if (saveImagesFlag) {
            saveImages({name, sprites});
        }
    }
    await Pokemon.insertMany(pokemonArray);
}

async function saveImages(
    {
        name,
        sprites,
    }: {sprites: any, name: string }) {

    if (!fs.existsSync('public')) { fs.mkdirSync('public'); }
    if (!fs.existsSync('public/images')) { fs.mkdirSync('public/images'); }
    if (!fs.existsSync('public/images/' + name)) { fs.mkdirSync('public/images/' + name); }

    for (const spriteType of Object.keys(sprites)) {
        if (sprites[spriteType] !== null) {
            saveImage(sprites[spriteType], name, spriteType);
        }
    }
}
