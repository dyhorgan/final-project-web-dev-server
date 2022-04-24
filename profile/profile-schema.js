import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  imageURL: {type: String}
}, {collection: 'profile'});
export default schema;
