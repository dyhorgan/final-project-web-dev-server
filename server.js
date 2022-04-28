import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import profileController from "./controllers/profile-controllers.js"
import reviewController from "./controllers/review-controllers.js"
import movieReviewController from "./controllers/movieReview-controllers.js"
import userReviewController from "./controllers/userReview-controllers.js"

const app = express();
app.use(cors());
app.use(express.json());
app.get('/hello', (req, res) => {res.send('Hello World')})
app.get('/', (req, res) => {res.send('Welcome to my Final Project!')})
profileController(app);
reviewController(app);
userReviewController(app);
movieReviewController(app);
app.listen(process.env.PORT || 4000);
const CONNECTION_STRING = "mongodb+srv://dhorgan:Ho.66421@cluster0.robom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING);
