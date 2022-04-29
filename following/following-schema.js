import mongoose from 'mongoose';
const schema = mongoose.Schema({
  followerId: {type: String},
  followingId: {type: String},
  following: {type: String},
  follower: {type: String}
}, {collection: 'following'});

export default schema;
