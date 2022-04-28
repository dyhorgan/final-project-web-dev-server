import userReviewModel from './userReview-model.js';
export const findAllUserReviews = () => {
  return userReviewModel.find();
};

export const findOneUserReview = (id) => {
  try{
    return userReviewModel.findById(id);
  }catch(err){
    console.log(err);
  }
}
export const createUserReview = (userReview) => {
  try{
    return userReviewModel.create(userReview)
  }catch(err){
    console.log("failed in dao")
    console.log(err)
  }
};
export const deleteUserReview = (urid) => userReviewModel.deleteOne({_id: urid});
export const updateUserReview = (urid, profile) => userReviewModel.updateOne({_id: urid}, {$set: userReview})

export default {createUserReview, deleteUserReview, updateUserReview, findAllUserReviews, findOneUserReview};
