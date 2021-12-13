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

function checkId(id:any): boolean {
    const schema = Joi.number().min(1).integer().required();
    return !!schema.validate(id).error;
}

export {
    newQuestion,
    newAnswer,
    checkId,
};
