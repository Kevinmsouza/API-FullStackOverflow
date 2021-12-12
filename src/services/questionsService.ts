import dayjs from 'dayjs';
import { NewQuestion } from '../interfaces/questionsInterface';
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

export {
    newQuestion,
    listNoAnsweredQuestions,
};
