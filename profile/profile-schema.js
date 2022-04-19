import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: String,
  password: String,
  imageURL: String
}, {collection: 'profile'});
export default schema;
