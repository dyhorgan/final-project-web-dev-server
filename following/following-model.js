import mongoose from 'mongoose';
import schema from './following-schema.js'
const followingModel = mongoose.model('FollowingModel', schema);
export default followingModel;
