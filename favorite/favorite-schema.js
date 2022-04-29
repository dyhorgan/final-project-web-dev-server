import mongoose from 'mongoose';
const schema = mongoose.Schema({
  userId: {type: String},
  movieId: {type: String},
  title: {type: String}
}, {collection: 'favorite'});

export default schema;
