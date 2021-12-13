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

async function listNoAnsweredQuestions(req: Request, res: Response, next: NextFunction) {
    try {
        const questions = await questionsService.listNoAnsweredQuestions();
        res.status(200).send(questions);
    } catch (error) {
        next(error);
    }
}

async function createAnswer(req: Request, res: Response, next: NextFunction) {
    try {
        const newAnswer = {
            questionId: Number(req.params.id),
            answer: req.body.answer,
            userId: res.locals.userId,
        };
        if (questionsValidations.newAnswer(newAnswer)) return res.sendStatus(400);
        await questionsService.createAnswer(newAnswer);
        res.sendStatus(201);
    } catch (error) {
        if (error.name === 'QuestionsError') {
            return res.status(404).send(error.message);
        }
        if (error.name === 'AnswerError') {
            return res.status(409).send(error.message);
        }
        next(error);
    }
}

async function getQuestionById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        if (questionsValidations.checkId(id)) return res.sendStatus(400);
        const question = await questionsService.getQuestionById({ id });
        res.status(200).send(question);
    } catch (error) {
        if (error.name === 'QuestionsError') {
            return res.status(404).send(error.message);
        }
        next(error);
    }
}

export {
    newQuestion,
    listNoAnsweredQuestions,
    createAnswer,
    getQuestionById,
};
