import dayjs from 'dayjs';
import connection from '../database';
import { NewQuestion, QuestionId } from '../interfaces/questionsInterface';

async function createQuestion(newQuestion: NewQuestion): Promise<QuestionId> {
    const {
        question,
        student,
        className,
        tags,
    } = newQuestion;
    const result = await connection.query(`
        INSERT INTO questions
            (question, student, class, tags, "submitAt", answered)
        VALUES  ($1, $2, $3, $4, $5, $6)
        RETURNING id
    ;`, [question, student, className, tags, dayjs(), false]);
    return result.rows[0];
}

export {
    createQuestion,
};
