import { Router } from 'express';
import * as questionsController from '../controllers/questionsController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('', questionsController.newQuestion);
router.get('', questionsController.listNoAnsweredQuestions);

router.use(authMiddleware);
router.post('/:id', questionsController.createAnswer);

export default router;
