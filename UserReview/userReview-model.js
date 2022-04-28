import mongoose from 'mongoose';
import schema from './userReview-schema.js'
const profileModel = mongoose.model('UserReviewModel', schema);
export default profileModel;
