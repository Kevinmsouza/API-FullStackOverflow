import { NewQuestion } from '../interfaces/questionsInterface';
import * as questionsRepository from '../repositories/questionsRepository';

async function newQuestion(question: NewQuestion) {
    return questionsRepository.createQuestion(question);
}

export {
    newQuestion,
};
