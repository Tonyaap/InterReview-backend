 import  {Router} from "express";
 import {User, Interview} from "../database/models";
const router = new Router()


router.get("/", async (req, res, next) => {
  try { 
    const user = await User.findAll({
      include: [Interview]
    });

    res.json(user);
  } catch (e) {
    next(e);
  }
} )

export default router;