import movieReviewDao from "../MovieReview/movieReview-dao.js";

const findAllMovieReviews = async (req, res) => {

  const movieReviews = await movieReviewDao.findAllMovieReviews()

  res.json(movieReviews);
}

const findOneMovieReview = async (req, res) => {

  const movieReview = await reviewDao.findOneMovieReview(req.query.id);

  res.json(movieReview);
}

 const createMovieReview = async (req, res) => {
  try{
   const newMovieReview = req.body;
   const insertedMovieReview = await movieReviewDao.createMovieReview(newMovieReview);
   res.json(insertedMovieReview);
  }catch(err){
    console.log(err);
  }
}

 const deleteMovieReview = async (req, res) => {
  const movieReviewIdToDelete = req.params.mrid;
  const status = await movieReviewDao.deleteMovieReview(movieReviewIdToDelete);

  res.send(status);
 }

 const updateMovieReview = async (req, res) => {
   const movieReviewIdToUpdate = req.params.mrid;
   const updatedMovieReview = req.body;
   const status = await movieReviewDao.updateMovieReview(movieReviewIdToUpdate, updatedMovieReview);
   res.send(status);
  }

export default (app) => {
 app.post('/api/movie-reviews', createMovieReview);
 app.get('/api/movie-reviews', findAllMovieReviews);
 app.get('/api/movie-reviews/:id', findOneMovieReview);
 app.put('/api/movie-reviews/:mrid', updateMovieReview);
 app.delete('/api/movie-reviews/:mrid', deleteMovieReview);
 }
