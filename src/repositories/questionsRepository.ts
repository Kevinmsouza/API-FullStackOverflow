import dayjs from 'dayjs';
import connection from '../database';
import { NewQuestion, Question, QuestionId } from '../interfaces/questionsInterface';

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

async function listNoAnsweredQuestions(): Promise<Question[]> {
    const result = await connection.query(`
        SELECT 
            id,
            question,
            student,
            class as "className",
            "submitAt"
        FROM questions
        WHERE answered IS FALSE
    ;`);
    return result.rows;
}

export {
    createQuestion,
    listNoAnsweredQuestions,
};
