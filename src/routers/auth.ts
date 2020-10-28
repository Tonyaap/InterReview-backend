// import bcrypt from "bcrypt";
import {Router} from "express";
import {toJWT} from "../auth/jwt"
import {auth} from "../auth/middleware"
import {User, Interview} from "../database/models";

const SALT_ROUNDS = 10
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
      console.log("WHAt IS EMAIL AND PASSWORd?", req.body)
    if (!email || !password) {
      
      return res
        .status(400)
       
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include:  [Interview]
        
      
    });
 

    // if (!user || !bcrypt.compareSync(password, user.password)) {
      if (!user) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.getDataValue["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .send({ message: "Please provide an email, password and a name" });
  }

  try {
    const newUser = await User.create({
      email,
      // password: bcrypt.hashSync(password, SALT_ROUNDS),
      password: password,
      name,
    });

    delete newUser.getDataValue["password"]; // don't send back the password hash
    const token = toJWT({ userId: newUser.id });

    res.send(token);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", auth, async (req, res) => {
  const interview = await Interview.findAll({
    where: { userId: req.user.id },
  });

  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({
    ...req.user.dataValues,
    interview,
  });
  console.log("req user", req.user);
});

export default router;
