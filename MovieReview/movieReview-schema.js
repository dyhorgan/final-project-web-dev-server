import mongoose from 'mongoose';
const schema = mongoose.Schema({
  movieId: {type: String},
  reviewId: {type: String}
}, {collection: 'movieReview'});

export default schema;
