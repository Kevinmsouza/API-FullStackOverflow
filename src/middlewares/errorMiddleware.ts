/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    Request, Response, NextFunction, Errback,
} from 'express';

export default async function errorMiddleware(err: Errback, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    return res.sendStatus(500);
}
