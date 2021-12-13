import dayjs from 'dayjs';
import AnswerError from '../errors/answerError';
import QuestionsError from '../errors/questionsError';
import { NewAnswer, NewQuestion } from '../interfaces/questionsInterface';
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

export {
    newQuestion,
    listNoAnsweredQuestions,
    createAnswer,
};
