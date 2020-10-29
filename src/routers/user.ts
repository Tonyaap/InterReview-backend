import { Router } from 'express';
import { User, Interview } from '../database/models';
const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findAll({
      include: [Interview],
    });

    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.post('/interview', async (req, res, next) => {
  try {
    const {
      userId,
      name,
      nervousScore,
      rapportScore,
      technicalScore,
      preparationScore,
      bodylanguageScore,
      questions,
    } = req.body;

    const interview = await Interview.create({
      UserId: userId,
      name,
      questions,
      nervousScore,
      rapportScore,
      technicalScore,
      preparationScore,
      bodylanguageScore,
    });

    res.json(interview);
  } catch (e) {
    next(e);
  }
});

export default router;
