import { Schema } from 'mongoose';
import mongoose = require('mongoose');
import { FavoriteDTO } from 'src/types/favorite.dto';

const FavoriteSchema = new Schema({
  name: String,
  pokemonId: Schema.Types.ObjectId,
});

export const FavoriteModel = mongoose.model<any>('Favorite', FavoriteSchema);
