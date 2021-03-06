import dayjs from 'dayjs';
import AnswerError from '../errors/answerError';
import QuestionsError from '../errors/questionsError';
import { NewAnswer, NewQuestion, QuestionId } from '../interfaces/questionsInterface';
import * as questionsRepository from '../repositories/questionsRepository';

async function newQuestion(question: NewQuestion) {
    return questionsRepository.createQuestion(question);
}

async function listNoAnsweredQuestions() {
    const questions = await questionsRepository.listNoAnsweredQuestions();
    questions.forEach((question) => {
        // eslint-disable-next-line no-param-reassign
        question.submitAt = dayjs(question.submitAt).format('YYYY-MM-DD HH:mm');
    });
    return questions;
}

async function createAnswer(newAnswer: NewAnswer) {
    const { questionId } = newAnswer;
    const checkQuestion = await questionsRepository.getQuestionById({ id: questionId });
    if (!checkQuestion) {
        throw new QuestionsError('Question does not exist.');
    }
    if (checkQuestion.answered) {
        throw new AnswerError('Question already have an awnwer.');
    }
    return questionsRepository.createAnswer(newAnswer);
}

async function getQuestionById(questionId: QuestionId) {
    const result = await questionsRepository.getQuestionById(questionId);
    if (!result) {
        throw new QuestionsError('Question does not exist.');
    }
    result.submitAt = dayjs(result.submitAt).format('YYYY-MM-DD HH:mm');
    if (!result.answered) {
        delete result.answeredAt;
        delete result.answeredBy;
        delete result.answer;
        return result;
    }
    result.answeredAt = dayjs(result.answeredAt).format('YYYY-MM-DD HH:mm');
    return result;
}

export {
    newQuestion,
    listNoAnsweredQuestions,
    createAnswer,
    getQuestionById,
};
