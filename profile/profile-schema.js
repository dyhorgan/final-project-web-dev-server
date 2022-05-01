import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  bio: {type: String},
  imageUrl: {type: String},
  phone: {type: String},
  email: {type: String},
  admin: {type: Boolean}
}, {collection: 'profile'});

schema.path('username').validate(async (username) => {
  const profileCount = await mongoose.models.ProfileModel.countDocuments({username});
  return !profileCount;
})

export default schema;
