
import favoriteDao from "../favorite/favorite-dao.js";

const findAllFavorites = async (req, res) => {

  const favorites = await favoriteDao.findAllFavorites(req.query.id)

  res.json(favorites);
}

const findOneFavorite = async (req, res) => {

  const favorite = await favoriteDao.findOneFavorite(req.query.id);

  res.json(favorite);
}

 const createFavorite = async (req, res) => {
  try{
   const newFavorite = req.body;
   const insertedFavorite = await favoriteDao.createFavorite(newFavorite);
   res.json(insertedFavorite);
  }catch(err){
    console.log(err);
  }
}

 const deleteFavorite = async (req, res) => {
  const favoriteIdToDelete = req.params.fid;
  const status = await favoriteDao.deleteFavorite(favoriteIdToDelete);

  res.send(status);
 }

 const updateFavorite = async (req, res) => {
   const favoriteIdToUpdate = req.params.rid;
   const updatedFavorite = req.body;
   const status = await favoriteDao.updateFavorite(favoriteIdToUpdate, updatedFavorite);
   res.send(status);
  }

export default (app) => {
 app.post('/api/favorites', createFavorite);
 app.get('/api/favorites', findAllFavorites);
 app.get('/api/favorites/:id', findOneFavorite);
 app.put('/api/favorites/:fid', updateFavorite);
 app.delete('/api/favorites/:fid', deleteFavorite);
 }

