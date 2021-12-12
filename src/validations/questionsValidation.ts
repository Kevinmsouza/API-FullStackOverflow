import Joi from 'joi';

function newQuestion(question:any): Boolean {
    const schema = Joi.object({
        question: Joi.string().required(),
        student: Joi.string().required(),
        className: Joi.string().required(),
        tags: Joi.string().required(),
    });
    return !!schema.validate(question).error;
}

export {
    newQuestion,
};
