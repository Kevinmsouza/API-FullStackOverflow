import Joi from 'joi';

function newQuestion(question:any): boolean {
    const schema = Joi.object({
        question: Joi.string().required(),
        student: Joi.string().required(),
        className: Joi.string().required(),
        tags: Joi.string().required(),
    });
    return !!schema.validate(question).error;
}

function newAnswer(answer:any): boolean {
    const schema = Joi.object({
        questionId: Joi.number().required(),
        answer: Joi.string().required(),
        userId: Joi.number().required(),
    });
    return !!schema.validate(answer).error;
}

export {
    newQuestion,
    newAnswer,
};
