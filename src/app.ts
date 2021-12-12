import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check-status', (req, res) => {
    res.sendStatus(200);
});

app.use(errorMiddleware);

export default app;
