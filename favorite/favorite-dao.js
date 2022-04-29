import favoriteModel from './favorite-model.js';
export const findAllFavorites = (obj) => {
  return favoriteModel.find(obj);
};

export const findOneFavorite = (id) => {
  try{
    return favoriteModel.findById({id});
  }catch(err){
    console.log(err);
  }
}
export const createFavorite = (favorite) => {
  try{
    return favoriteModel.create(favorite)
  }catch(err){
    console.log(err)
  }
};
export const deleteFavorite = (fid) => favoriteModel.deleteOne({_id: fid});
export const updateFavorite = (fid, favorite) => favoriteModel.updateOne({_id: fid}, {$set: favorite})

export default {createFavorite, deleteFavorite, updateFavorite, findAllFavorites, findOneFavorite};
