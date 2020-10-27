import express = require ("express")
import {getDatabase} from "../src/database/"
import userRouter from "./routers/user"
const app: express.Application = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

getDatabase().then(async (db) => {
app.use("/users", userRouter)


app.listen(8080, function() {
  console.log("App is listening on port 8080")
} ) })




// const Users = require("../src/database/models/user.model")
// const Interviews = require("../src/database/models/interview.model")

// app.get("/", async (req, res, next) => {

//   try { 
//     const user = await Users.findAll({
//       include: [Interviews]
//     });

//     res.json(user);
//   } catch (e) {
//     next(e);
//   }
// } )


// getDatabase().then(async (db) => {

//   const user = await User.findOne();

//   if (!user) {
//     console.log('Sorry, could not find any user...');
//     return;
//   }
//   const { name, email } = user;
//   console.log('UserName', name, "Email:", email);
// })
