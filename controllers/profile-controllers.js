
import profileDao from "../profile/profile-dao.js";

const findAllProfiles = async (req, res) => {
  console.log("firing profile controller");
  const profiles = await profileDao.findAllProfiles()

  res.json(profiles);
}

const findOneProfile = async (req, res) => {

  const profile = await profileDao.findOneProfile(req.query.username, req.query.password);

  res.json(profile);
}

 const createProfile = async (req, res) => {
  try{
   console.log("firing create controller in server");
   const newProfile = req.body;
   const insertedProfile = await profileDao.createProfile(newProfile);
   res.json(insertedProfile);
  }catch(err){
    console.log("failed in controller");
  }
}

 const deleteProfile = async (req, res) => {
  const profileIdToDelete = req.params.pid;
  const status = await profileDao.deleteProfile(profileIdToDelete);

  res.send(status);
 }

 const updateProfile = async (req, res) => {
   const profileIdToUpdate = req.params.id;
   const updatedProfile = req.body;
   console.log("logging params in profile");
   console.log(req.params);
   console.log("logging body in profile");
   console.log(req.body);
   console.log("logging query in profile");
   console.log(req.query);
   const status = await profileDao.updateProfile(profileIdToUpdate, updatedProfile);
//   tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
   res.send(status);
  }

export default (app) => {
 app.post('/api/profiles', createProfile);
 app.get('/api/profiles', findAllProfiles);
 app.get('/api/profile', findOneProfile);
 app.put('/api/profiles/:pid', updateProfile);
 app.delete('/api/profiles/:pid', deleteProfile);
 }

