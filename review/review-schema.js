import mongoose from 'mongoose';
const schema = mongoose.Schema({
  text: {type: String},
  userId: {type: String},
  movieId: {type: String},
  time: {type: Date}
}, {collection: 'review'});

export default schema;