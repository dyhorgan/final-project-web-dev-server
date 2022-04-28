import mongoose from 'mongoose';
const schema = mongoose.Schema({
  followerId: {type: String},
  followingId: {type: String}
}, {collection: 'following'});

export default schema;
