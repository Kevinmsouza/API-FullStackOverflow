import Joi from 'joi';

function newUser(user: any): boolean {
    const schema = Joi.object({
        name: Joi.string().required(),
        className: Joi.string().required(),
    });
    return !!schema.validate(user).error;
}

export {
    newUser,
};
