import mongoose from 'mongoose';
const schema = mongoose.Schema({
  userId: {type: String},
  movieId: {type: String}
}, {collection: 'favorite'});

export default schema;
