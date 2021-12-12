import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddleware';
import questionsRouter from './routers/questionsRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check-status', (req, res) => {
    res.sendStatus(200);
});
app.use('/questions', questionsRouter);
app.use(errorMiddleware);

export default app;
