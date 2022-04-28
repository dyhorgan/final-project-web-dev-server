import mongoose from 'mongoose';
import schema from './review-schema.js'
const reviewModel = mongoose.model('ReviewModel', schema);
export default reviewModel;
