import { Request, Response, NextFunction } from 'express';
import * as questionsValidations from '../validations/questionsValidation';
import * as questionsService from '../services/questionsService';

async function newQuestion(req: Request, res: Response, next: NextFunction) {
    try {
        if (questionsValidations.newQuestion(req.body)) return res.sendStatus(400);

        const questionId = await questionsService.newQuestion(req.body);
        res.status(201).send(questionId);
    } catch (error) {
        next(error);
    }
}

export {
    newQuestion,
};
