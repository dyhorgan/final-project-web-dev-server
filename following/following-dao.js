import followingModel from './following-model.js';

export const findAllFollowing = (followingId) => {
  console.log("logging in find all followers - followingId")
  console.log(followingId);
  return followingModel.find({followingId});
};
export const findAllFollowers = (followerId) => {
  console.log("logging in find all followers - followerId")
  console.log(followerId);
  return followingModel.find({followerId})
};

export const findOneFollowing = (id) => {
  try{
    return followingModel.findById({id});
  }catch(err){
    console.log(err);
  }
}
export const createFollowing = (profile) => {
  try{
    return followingModel.create(profile)
  }catch(err){
    console.log("failed in dao")
  }
};
export const deleteFollowing = (fid) => followingModel.deleteOne({_id: pid});
export const updateFollowing = (fid, following) => followingModel.updateOne({_id: fid}, {$set: following})

export default {createFollowing, deleteFollowing, updateFollowing, findAllFollowing, findAllFollowers, findOneFollowing};
