import reviewModel from './review-model.js';
export const findAllReviews = (uid) => {
  console.log("logging uid in review dao");
  console.log(uid);
  return reviewModel.find({userId: uid});
};

export const findOneReview = (id) => {
  try{
    return reviewModel.findById(id);
  }catch(err){
    console.log(err);
  }
}
export const createReview = (review) => {
  try{
    return reviewModel.create(review)
  }catch(err){
    console.log("failed in dao")
  }
};
export const deleteReview = (rid) => reviewModel.deleteOne({_id: rid});
export const updateReview = (rid, review) => profileModel.updateOne({_id: rid}, {$set: review})

export default {createReview, deleteReview, updateReview, findAllReviews, findOneReview};
