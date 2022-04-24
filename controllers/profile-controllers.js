
import profileDao from "../profile/profile-dao.js";

const findAllProfiles = async (req, res) => {
  const profiles = await profileDao.findAllProfiles()

  res.json(profiles);
}

 const createProfile = async (req, res) => {
  try{
   const newProfile = req.body;
   const insertedProfile = await profileDao.createProfile(newProfile);
   res.json(insertedProfile);
  }catch(err){
    console.log("failed in controller");
    console.log(err)
  }
}

 const deleteProfile = async (req, res) => {
  const profileIdToDelete = req.params.pid;
  const status = await profileDao.deleteProfile(profileIdToDelete);

  res.send(status);
 }

 const updateProfile = async (req, res) => {
   const profileIdToUpdate = req.params.tid;
   const updatedProfile = req.body;
   const status = await profileDao.updateProfile(profileIdToUpdate, updatedProfile);
//   tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
   res.send(status);
  }

export default (app) => {
 app.post('/api/profiles', createProfile);
 app.get('/api/profiles', findAllProfiles);
 app.put('/api/profiles/:pid', updateProfile);
 app.delete('/api/profiles/:pid', deleteProfile);
 }

