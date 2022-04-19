import mongoose from 'mongoose';
import schema from './profile-schema.js'
const profileModel = mongoose.model('ProfileModel', schema);
export default profileModel;
