import mongoose from 'mongoose';
import schema from './movieReview-schema.js'
const movieReviewModel = mongoose.model('MovieReviewModel', schema);
export default movieReviewModel;
