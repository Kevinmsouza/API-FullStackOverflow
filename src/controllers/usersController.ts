import { Request, Response, NextFunction } from 'express';
import * as usersService from '../services/usersService';
import * as usersValidation from '../validations/usersValidation';

async function newUser(req: Request, res: Response, next: NextFunction) {
    try {
        if (usersValidation.newUser(req.body)) return res.sendStatus(400);

        const userToken = await usersService.newUser(req.body);
        res.status(201).send(userToken);
    } catch (error) {
        next(error);
    }
}

export {
    newUser,
};
