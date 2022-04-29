
import followingDao from "../following/following-dao.js";

const findAllFollowing = async (req, res) => {
  console.log("body");
    console.log(req.body);
    console.log("query");
    console.log(req.query);
    console.log("params");
    console.log(req.params);
  const following = await followingDao.findAllFollowing(req.query.id);
  console.log(following)

  res.json(following);
}

const findAllFollowers = async (req, res) => {
  console.log("body");
  console.log(req.body);
  console.log("query");
  console.log(req.query);
  console.log("params");
  console.log(req.params);

  const followers = await followingDao.findAllFollowers(req.query.id);
  console.log(followers);

  res.json(followers);
}

const findOneFollowing = async (req, res) => {

  const following = await followingDao.findOneFollowing(req.query.id);

  res.json(following);
}

 const createFollowing = async (req, res) => {
  try{
   const newFollowing = req.body;
   const insertedFollowing = await followingDao.createFollowing(newFollowing);
   res.json(insertedFollowing);
  }catch(err){
    console.log(err);
  }
}

 const deleteFollowing = async (req, res) => {
  const followingIdToDelete = req.params.fid;
  const status = await followingDao.deleteFollowing(followingIdToDelete);

  res.send(status);
 }

 const updateFollowing = async (req, res) => {
   const followingIdToUpdate = req.params.fid;
   const updatedFollowing = req.body;
   const status = await followingDao.updateFollowing(followingIdToUpdate, updatedFollowing);
   res.send(status);
  }

export default (app) => {
 app.post('/api/following', createFollowing);
 app.get('/api/following', findAllFollowing);
 app.get('/api/following', findAllFollowers);
 app.get('/api/following/:id', findOneFollowing);
 app.put('/api/following/:fid', updateFollowing);
 app.delete('/api/following/:fid', deleteFollowing);
 }

