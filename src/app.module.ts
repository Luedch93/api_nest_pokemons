/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [],
  controllers: [PokemonsController],
  providers: [AppService],
})
export class AppModule {}
