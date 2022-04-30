
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

const findProfileById = async (req, res) => {
  console.log("firing findProfileById")
  console.log("params in id");
  console.log(req.params);
  console.log("body in id");
  console.log(req.body);
  console.log("query in id");
  console.log(req.query);
  const profile = await profileDao.findProfileById(req.params.id)
}

 const createProfile = async (req, res) => {
  try{

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
   const profileIdToUpdate = req.params.pid;
   const updatedProfile = req.body.body;

   const status = await profileDao.updateProfile(profileIdToUpdate, updatedProfile);
//   tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    console.log("status: ");
    console.log(status);
   res.send(status);
  }

export default (app) => {
 app.post('/api/profiles', createProfile);
 app.get('/api/profiles', findAllProfiles);
 app.get('/api/profile', findOneProfile);
 app.get('/api/profiles/:id', findProfileById);
 app.put('/api/profiles/:pid', updateProfile);
 app.delete('/api/profiles/:pid', deleteProfile);
 }

