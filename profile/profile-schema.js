import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  imageURL: {type: String}
}, {collection: 'profile'});

schema.path('username').validate(async (username) => {
  const profileCount = await mongoose.models.ProfileModel.countDocuments({username});
  return !profileCount;
}, "Username already exists")

export default schema;
