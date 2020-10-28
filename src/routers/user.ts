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
    console.log('it get is the try catch in the /interview');
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

    console.log('userId', userId);
    console.log('name', name);
    console.log('nervousScore', nervousScore);
    console.log('rapportScore', rapportScore);
    console.log('technicalScore', technicalScore);
    console.log('preparationScore', preparationScore);
    console.log('bodylanguageScore', bodylanguageScore);
    console.log('questions', questions);

    const interview = await Interview.create({
      userId,
      name,
      questions,
      nervousScore,
      rapportScore,
      technicalScore,
      preparationScore,
      bodylanguageScore,
    });
    console.log('this is the interview we created,', interview);

    res.json(interview);
  } catch (e) {
    next(e);
  }
});

export default router;
