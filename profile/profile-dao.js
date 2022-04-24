import profileModel from './profile-model.js';
export const findAllProfiles = () => {
  return profileModel.find();
};
export const createProfile = (profile) => {
  try{
    return profileModel.create(profile)
  }catch(err){
    console.log("failed in dao")
  }
};
export const deleteProfile = (pid) => profileModel.deleteOne({_id: pid});
export const updateProfile = (pid, profile) => profileModel.updateOne({_id: pid}, {$set: profile})

export default {createProfile, deleteProfile, updateProfile, findAllProfiles};
