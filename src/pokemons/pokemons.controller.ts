import { Controller, Get, Param, Res, Req, Post, Body } from '@nestjs/common';

import { AppService } from '../app.service';
import { Request, Response } from 'express-serve-static-core';
import { FavoriteDTO } from 'src/types/favorite.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getPokemon(@Param('name') name: string) {
    return this.appService.getPokemonDetail(name);
  }

  @Get(':name/:typeImage')
  getImage(@Res() res: Response, @Req() req: Request) {
    const { name, typeImage } = req.params;
    const path = this.appService.getImagePath(name, typeImage);
    res.status(200).sendFile(path);
  }

  @Get()
  getPokemons() {
    return this.appService.getPokemons();
  }

  @Post()
  async addFavorites(@Body() favorite: FavoriteDTO) {
    return await this.appService.saveFavorite(favorite);
  }
}
