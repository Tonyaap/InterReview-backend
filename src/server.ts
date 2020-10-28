import express = require ("express")
import {getDatabase} from "../src/database/"
import userRouter from "./routers/user"
import authRouter from "./routers/auth"
const app: express.Application = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

getDatabase().then(async (db) => {
app.use("/users", userRouter)
app.use("/auth", authRouter)


app.listen(8080, function() {
  console.log("App is listening on port 8080")
} ) })