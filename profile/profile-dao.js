import profileModel from './profile-model.js';
export const findAllProfiles = () => {
  return profileModel.find();
};
export const createProfile = (profile) => {
  try{
    console.log("succeeded?");
    return profileModel.create(profile)
  }catch(err){
    console.log("FIRING!!!!!");
    console.log(err);
  }
};
export const deleteProfile = (pid) => profileModel.deleteOne({_id: pid});
export const updateProfile = (pid, profile) => profileModel.updateOne({_id: pid}, {$set: profile})

export default {createProfile, deleteProfile, updateProfile, findAllProfiles};
