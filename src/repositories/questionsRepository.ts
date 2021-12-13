import dayjs from 'dayjs';
import connection from '../database';
import {
    NewAnswer, NewQuestion, Question, QuestionId,
} from '../interfaces/questionsInterface';

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

async function createAnswer(newAnswer: NewAnswer) {
    const { questionId, answer, userId } = newAnswer;
    const result = await connection.query(`
        UPDATE questions
        SET
            "answer" = $2,
            "answererId" = $3,
            "answeredAt" = $4,
            "answered" = $5
        WHERE id = $1
    ;`, [questionId, answer, userId, dayjs(), true]);
    return result.rowCount;
}

async function getQuestionById(questionId: QuestionId): Promise<Question | undefined> {
    const { id } = questionId;
    const result = await connection.query(`
        SELECT
            "question",
            "student",
            questions."class" as "className",
            "tags",
            "answered",
            "submitAt",
            "answeredAt",
            users."name" as "answeredBy",
            "answer"
        FROM questions
            LEFT JOIN users 
                ON users."id" = questions."answererId"
        WHERE questions."id" = $1
        LIMIT 1
    ;`, [id]);
    return result.rows[0];
}

export {
    createQuestion,
    listNoAnsweredQuestions,
    createAnswer,
    getQuestionById,
};
