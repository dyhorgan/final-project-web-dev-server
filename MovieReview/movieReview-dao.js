import movieReviewModel from './movieReview-model.js';
export const findAllMovieReviews = () => {
  return movieReviewModel.find();
};

export const findOneMovieReview = (id) => {
  try{
    return movieReviewModel.findById(id);
  }catch(err){
    console.log(err);
  }
}
export const createMovieReview = (movieReview) => {
  try{
    return movieReviewModel.create(movieReview)
  }catch(err){
    console.log("failed in dao")
  }
};
export const deleteMovieReview = (mrid) => movieReviewModel.deleteOne({_id: mrid});
export const updateMovieReview = (mrid, movieReview) => movieReviewModel.updateOne({_id: mrid}, {$set: movieReview})

export default {createMovieReview, deleteMovieReview, updateMovieReview, findAllMovieReviews, findOneMovieReview};
