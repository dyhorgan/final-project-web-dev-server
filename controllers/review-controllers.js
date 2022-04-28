
import reviewDao from "../review/review-dao.js";

const findAllReviews = async (req, res) => {

  const reviews = await reviewDao.findAllReviews()

  res.json(reviews);
}

const findOneReview = async (req, res) => {

  const review = await reviewDao.findOneReview(req.query.id);

  res.json(review);
}

 const createReview = async (req, res) => {
  try{
   const newReview = req.body;
   const insertedReview = await reviewDao.createReview(newReview);
   res.json(insertedReview);
  }catch(err){
    console.log(err);
  }
}

 const deleteReview = async (req, res) => {
  const reviewIdToDelete = req.params.rid;
  const status = await reviewDao.deleteReview(reviewIdToDelete);

  res.send(status);
 }

 const updateReview = async (req, res) => {
   const reviewIdToUpdate = req.params.rid;
   const updatedReview = req.body;
   const status = await reviewDao.updateReview(reviewIdToUpdate, updatedReview);
   res.send(status);
  }

export default (app) => {
 app.post('/api/reviews', createReview);
 app.get('/api/reviews', findAllReviews);
 app.get('/api/reviews/:id', findOneReview);
 app.put('/api/reviews/:rid', updateReview);
 app.delete('/api/reviews/:rid', deleteReview);
 }

