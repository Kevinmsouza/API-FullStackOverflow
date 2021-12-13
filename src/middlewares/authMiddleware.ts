import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../repositories/usersRepository';

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.sendStatus(401);
    const result = await userRepository.getUserIdByToken({ token });
    if (!result) return res.sendStatus(403);
    res.locals.userId = result;
    next();
}
