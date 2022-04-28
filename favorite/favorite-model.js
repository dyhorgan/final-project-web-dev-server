import mongoose from 'mongoose';
import schema from './favorite-schema.js'
const favoriteModel = mongoose.model('FavoriteModel', schema);
export default favoriteModel;
