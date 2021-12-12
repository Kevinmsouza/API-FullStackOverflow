import { Router } from 'express';
import * as questionsController from '../controllers/questionsController';

const router = Router();

router.post('', questionsController.newQuestion);
router.get('', questionsController.listNoAnsweredQuestions);

export default router;
