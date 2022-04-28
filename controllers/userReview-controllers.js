
import userReviewDao from "../UserReview/userReview-dao.js";

const findAllUserReviews = async (req, res) => {

  const userReviews = await userReviewDao.findAllUserReviews()

  res.json(reviews);
}

const findOneUserReview = async (req, res) => {

  const userReview = await userReviewDao.findOneUserReview(req.query.id);

  res.json(userReview);
}

 const createUserReview = async (req, res) => {
  try{
   const newUserReview = req.body;
   const insertedUserReview = await userReviewDao.createUserReview(newUserReview);
   res.json(insertedUserReview);
  }catch(err){
    console.log(err);
  }
}

 const deleteUserReview = async (req, res) => {
  const userReviewIdToDelete = req.params.urid;
  const status = await userReviewDao.deleteUserReview(userReviewIdToDelete);

  res.send(status);
 }

 const updateUserReview = async (req, res) => {
   const userReviewIdToUpdate = req.params.urid;
   const updatedUserReview = req.body;
   const status = await userReviewDao.updateUserReview(userReviewIdToUpdate, updatedUserReview);
   res.send(status);
  }

export default (app) => {
 app.post('/api/user-reviews', createUserReview);
 app.get('/api/user-reviews', findAllUserReviews);
 app.get('/api/user-reviews/:id', findOneUserReview);
 app.put('/api/user-reviews/:urid', updateUserReview);
 app.delete('/api/user-reviews/:urid', deleteUserReview);
 }
